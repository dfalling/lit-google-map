export type notifyCallback = (error: Error, result: unknown) => void;

interface Dictionary<T> {
  [Key: string]: T;
}

export class ScriptLoaderMap {
  private static instance: ScriptLoaderMap;
  private apiMap: Dictionary<ScriptLoader> = {}; // { hash -> Loader }

  public require(
    url: string,
    notifyCallback: notifyCallback,
    jsonpCallbackName: string,
  ) {
    const name = this.nameFromUrl(url);

    // create a loader as needed
    if (!this.apiMap[name])
      this.apiMap[name] = new ScriptLoader(name, url, jsonpCallbackName);

    // ask for notification
    this.apiMap[name].requestNotify(notifyCallback);
  }

  public static getInstance(): ScriptLoaderMap {
    if (!ScriptLoaderMap.instance) {
      ScriptLoaderMap.instance = new ScriptLoaderMap();
    }

    return ScriptLoaderMap.instance;
  }

  private nameFromUrl(url: string): string {
    return `${url.replace(/[:/%?&.=\-,]/g, "_")}_api`;
  }
}

class ScriptLoader {
  error: Error;
  result: unknown;
  notifiers: Array<notifyCallback>;
  callbackName: string;
  callbackMacro = "%%callback%%";
  loaded = false;
  script: HTMLScriptElement = null;

  constructor(name: string, url: string, callbackName: string) {
    this.notifiers = [];
    let scriptUrl = url;
    let scriptCallbackName = callbackName;

    // callback is specified either as callback name
    // or computed dynamically if url has callbackMacro in it
    if (!scriptCallbackName) {
      if (scriptUrl.indexOf(this.callbackMacro) >= 0) {
        scriptCallbackName = `${name}_loaded`;
        scriptUrl = scriptUrl.replace(this.callbackMacro, scriptCallbackName);
      } else {
        console.error(
          "ScriptLoader class: a %%callback%% parameter is required in libraryUrl",
        );
        return;
      }
    }

    this.callbackName = scriptCallbackName;
    window[this.callbackName] = this.success.bind(this);
    this.addScript(scriptUrl);
  }

  addScript(src: string) {
    const script = document.createElement("script");
    script.src = src;
    script.onerror = this.handleError.bind(this);
    const s = document.querySelector("script") || document.body;
    s.parentNode.insertBefore(script, s);
    this.script = script;
  }

  removeScript() {
    if (this.script.parentNode) {
      this.script.parentNode.removeChild(this.script);
    }
    this.script = null;
  }

  handleError(_ev: OnErrorEventHandlerNonNull) {
    this.error = new Error("Library failed to load");
    this.notifyAll();
    this.cleanup();
  }

  success(...rest) {
    this.loaded = true;
    this.result = rest;
    this.notifyAll();
    this.cleanup();
  }

  cleanup() {
    delete window[this.callbackName];
  }

  notifyAll() {
    this.notifiers.forEach(
      function (notifyCallback: notifyCallback) {
        notifyCallback(this.error, this.result);
      }.bind(this),
    );
    this.notifiers = [];
  }

  requestNotify(notifyCallback: notifyCallback) {
    if (this.loaded || this.error) {
      notifyCallback(this.error, this.result);
    } else {
      this.notifiers.push(notifyCallback);
    }
  }
}
