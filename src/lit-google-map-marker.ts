import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-google-map-marker")
export class LitGoogleMapMarker extends LitElement {
  @property({ type: Number, reflect: true })
  latitude = 0;

  @property({ type: Number, reflect: true })
  longitude = 0;

  @property({ type: Number, reflect: true, attribute: "z-index" })
  zIndex = 0;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String, reflect: true })
  id: string | null = null;

  @property({ type: String, reflect: true })
  glyph: string | null = null;

  @property({ type: String, reflect: true })
  glyphColor: string | null = null;

  @property({ type: String, reflect: true })
  background: string | null = null;

  @property({ type: String, reflect: true })
  borderColor: string | null = null;

  @property({ type: Number, reflect: true })
  scale: number = null;

  map: google.maps.Map = null;
  marker: google.maps.marker.AdvancedMarkerElement = null;
  pin: google.maps.marker.PinElement = null;
  info: google.maps.InfoWindow;
  contentObserver: MutationObserver;
  openInfoHandler: google.maps.MapsEventListener;
  closeInfoHandler: google.maps.MapsEventListener;

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    switch (name) {
      case "open": {
        this.openChanged();
        break;
      }
      case "latitude": {
        this.updatePosition();
        break;
      }
      case "longitude": {
        this.updatePosition();
        break;
      }
      case "glyph": {
        if (this.pin) {
          this.pin.glyph = this.glyph;
        }
        break;
      }
      case "glyphColor": {
        if (this.pin) {
          this.pin.glyphColor = this.glyphColor;
        }
        break;
      }
      case "background": {
        if (this.pin) {
          this.pin.background = this.background;
        }
        break;
      }
      case "borderColor": {
        if (this.pin) {
          this.pin.borderColor = this.borderColor;
        }
        break;
      }
      case "scale": {
        if (this.pin) {
          this.pin.scale = this.scale;
        }
        break;
      }
      case "z-index": {
        if (this.marker) {
          this.marker.zIndex = this.zIndex;
        }
        break;
      }
    }
  }

  openChanged() {
    if (!this.info) return;

    if (this.open) {
      this.info.open(this.map, this.marker);
      this.dispatchEvent(
        new CustomEvent("google-map-marker-open", { bubbles: true }),
      );
    } else {
      this.info.close();
      this.dispatchEvent(
        new CustomEvent("google-map-marker-close", { bubbles: true }),
      );
    }
  }

  updatePosition() {
    if (this.marker) {
      this.marker.position = new google.maps.LatLng(
        this.latitude,
        this.longitude,
      );
    }
  }

  changeMap(newMap: google.maps.Map) {
    this.map = newMap;
    this.mapChanged();
  }

  mapChanged() {
    // Marker will be rebuilt, so disconnect existing one from old map and listeners.
    if (this.marker) {
      this.marker.map = null;
      google.maps.event.clearInstanceListeners(this.marker);
    }

    if (this.map && this.map instanceof google.maps.Map) {
      this.mapReady();
    }
  }

  mapReady() {
    this.pin = new google.maps.marker.PinElement({
      glyph: this.glyph,
      glyphColor: this.glyphColor,
      background: this.background,
      borderColor: this.borderColor,
      scale: this.scale,
    });
    this.marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: {
        lat: this.latitude,
        lng: this.longitude,
      },
      content: this.pin.element,
      zIndex: this.zIndex,
      gmpClickable: true,
    });

    this.marker.element.addEventListener("mouseover", () => {
      this.dispatchEvent(
        new CustomEvent("mouseover", {
          detail: { id: this.id },
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.marker.element.addEventListener("mouseout", () => {
      this.dispatchEvent(
        new CustomEvent("mouseout", {
          detail: { id: this.id },
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.marker.addListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("click", {
          detail: { id: this.id },
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.contentChanged();
  }

  contentChanged() {
    if (this.contentObserver) this.contentObserver.disconnect();

    this.contentObserver = new MutationObserver(this.contentChanged.bind(this));
    this.contentObserver.observe(this, {
      childList: true,
      subtree: true,
    });

    const content = this.innerHTML.trim();
    if (content) {
      if (!this.info) {
        this.info = new google.maps.InfoWindow();

        this.openInfoHandler = google.maps.event.addListener(
          this.marker,
          "click",
          function () {
            this.open = true;
          }.bind(this),
        );

        this.closeInfoHandler = google.maps.event.addListener(
          this.info,
          "closeclick",
          function () {
            this.open = false;
          }.bind(this),
        );
      }
      this.info.setContent(content);
    } else {
      if (this.info) {
        // Destroy the existing infowindow.  It doesn't make sense to have an empty one.
        google.maps.event.removeListener(this.openInfoHandler);
        google.maps.event.removeListener(this.closeInfoHandler);
        this.info = null;
      }
    }
  }
}
