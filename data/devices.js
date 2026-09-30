window.PRODUCT_DATA = {
  sources: {
    ps5: {
      name: "PlayStation 5",
      nativeConnections: ["hdmi"],
      modes: ["1080-60","1080-120","1440-60","1440-120","2160-60","2160-120"],
      note: "Prototype mode table; production data will require per-capability evidence."
    },
    pc: {
      name: "Gaming PC",
      nativeConnections: ["hdmi","displayport"],
      modes: null,
      unknown: true,
      note: "PC capability depends on GPU, port, drivers, and settings."
    }
  },
  displays: {
    lg32g620: {
      name: "LG UltraGear 32G620B-B",
      connections: ["hdmi","displayport"],
      modes: ["1080-60","1080-120","1440-60","1440-120","1440-200"],
      note: "Golden-test display. Production values must be tied to manufacturer evidence and per-port modes."
    },
    generic1080: {
      name: "Generic 1080p / 60Hz display",
      connections: ["hdmi"],
      modes: ["1080-60"]
    },
    generic1440: {
      name: "Generic 1440p / 60Hz display",
      connections: ["hdmi","displayport"],
      modes: ["1080-60","1440-60"]
    }
  },
  connections: {
    certifiedHdmi: { name: "Ultra High Speed HDMI", type: "hdmi", confidence: "known" },
    unknownHdmi: { name: "Older / unknown HDMI cable", type: "hdmi", confidence: "unknown" },
    displayport: { name: "DisplayPort", type: "displayport", confidence: "known" }
  }
};
