import { addParameters } from "@storybook/react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

addParameters({
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1,
    },
    canvas: { title: "Sandbox" },
  },
});
