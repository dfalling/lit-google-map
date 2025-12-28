import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-google-map-location-button")
export class LitGoogleMapLocationButton extends LitElement {
  @property({ type: String, reflect: true })
  position = "RIGHT_BOTTOM";

  @property({ type: String, reflect: true })
  label = "My Location";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  map: google.maps.Map = null;
  controlDiv: HTMLDivElement = null;
  controlButton: HTMLButtonElement = null;
  isRequesting = false;

  changeMap(newMap: google.maps.Map) {
    this.map = newMap;
    this.mapChanged();
  }

  mapChanged() {
    // Remove existing control if map changed
    if (this.controlDiv && this.map) {
      // Cannot directly remove from controls array, so we'll just create new one
      this.controlDiv = null;
      this.controlButton = null;
    }

    if (this.map && this.map instanceof google.maps.Map) {
      this.mapReady();
    }
  }

  mapReady() {
    this.controlDiv = this.createControlButton();

    // Map position string to ControlPosition enum
    const controlPosition =
      google.maps.ControlPosition[
        this.position as keyof typeof google.maps.ControlPosition
      ];

    if (controlPosition !== undefined) {
      this.map.controls[controlPosition].push(this.controlDiv);
    }
  }

  createControlButton(): HTMLDivElement {
    const controlDiv = document.createElement("div");
    controlDiv.style.margin = "10px";

    const controlButton = document.createElement("button");
    controlButton.type = "button";
    controlButton.title = this.label;
    controlButton.setAttribute("aria-label", this.label);

    // Create location icon using SVG
    controlButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
        <path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
      </svg>
    `;

    // Apply Google Maps control styling
    Object.assign(controlButton.style, {
      backgroundColor: "#fff",
      border: "0",
      borderRadius: "2px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
      cursor: "pointer",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      color: "#666",
    });

    // Hover effects
    controlButton.addEventListener("mouseenter", () => {
      if (!this.disabled && !this.isRequesting) {
        controlButton.style.backgroundColor = "#f8f8f8";
      }
    });

    controlButton.addEventListener("mouseleave", () => {
      if (!this.disabled && !this.isRequesting) {
        controlButton.style.backgroundColor = "#fff";
      }
    });

    // Click handler
    controlButton.addEventListener("click", () => {
      if (!this.disabled && !this.isRequesting) {
        this.handleLocationRequest();
      }
    });

    this.controlButton = controlButton;
    controlDiv.appendChild(controlButton);

    return controlDiv;
  }

  async handleLocationRequest() {
    if (!navigator.geolocation) {
      this.dispatchEvent(
        new CustomEvent("location-error", {
          detail: {
            code: -1,
            message: "Geolocation is not supported by your browser",
          },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    // Set loading state
    this.isRequesting = true;
    this.setLoadingState(true);

    this.dispatchEvent(
      new CustomEvent("location-requested", {
        bubbles: true,
        composed: true,
      }),
    );

    try {
      const position = await this.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Center the map
      this.map.setCenter({ lat, lng });
      this.map.setZoom(14);

      this.dispatchEvent(
        new CustomEvent("location-found", {
          detail: { lat, lng },
          bubbles: true,
          composed: true,
        }),
      );
    } catch (error) {
      let message = "Unable to retrieve your location";
      let code = -1;

      if (error instanceof GeolocationPositionError) {
        code = error.code;
        if (error.code === error.PERMISSION_DENIED) {
          message =
            "Location access denied. Please enable location permissions.";
        } else if (error.code === error.TIMEOUT) {
          message = "Location request timed out. Please try again.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Location information is unavailable.";
        }
      }

      this.dispatchEvent(
        new CustomEvent("location-error", {
          detail: { code, message },
          bubbles: true,
          composed: true,
        }),
      );
    } finally {
      this.isRequesting = false;
      this.setLoadingState(false);
    }
  }

  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 10000,
        enableHighAccuracy: true,
      });
    });
  }

  setLoadingState(loading: boolean) {
    if (!this.controlButton) return;

    if (loading) {
      this.controlButton.style.backgroundColor = "#f0f0f0";
      this.controlButton.style.cursor = "wait";
      // Add spinning animation
      const svg = this.controlButton.querySelector("svg");
      if (svg) {
        svg.style.animation = "spin 1s linear infinite";
        // Add keyframes if not already present
        const style = document.createElement("style");
        style.textContent = `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `;
        if (!document.querySelector("style[data-location-button-spin]")) {
          style.setAttribute("data-location-button-spin", "true");
          document.head.appendChild(style);
        }
      }
    } else {
      this.controlButton.style.backgroundColor = "#fff";
      this.controlButton.style.cursor = "pointer";
      const svg = this.controlButton.querySelector("svg");
      if (svg) {
        svg.style.animation = "";
      }
    }
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);

    if (name === "disabled" && this.controlButton) {
      if (this.disabled) {
        this.controlButton.style.backgroundColor = "#f0f0f0";
        this.controlButton.style.cursor = "not-allowed";
        this.controlButton.style.opacity = "0.6";
      } else {
        this.controlButton.style.backgroundColor = "#fff";
        this.controlButton.style.cursor = "pointer";
        this.controlButton.style.opacity = "1";
      }
    }
  }
}
