import { addons } from "@storybook/addons";
import storybookTheme from "./storybookTheme";

addons.setConfig({
  theme: storybookTheme,
  isFullscreen: false, // show story component as full screen
  showNav: true, // display panel that shows a list of stories
  showPanel: false, // display panel that shows addon configurations
  panelPosition: "bottom", // here to show the addon panel
  sidebarAnimations: false, // sidebar tree animations
  enableShortcuts: false, // enable/disable shortcuts
  isToolshown: true, // show/hide tool bar
  selectedPanel: undefined, // id to select an addon panel
});

// addons.setConfig({
//   theme: undefined,
//   isFullscreen: false, // show story component as full screen
//   showNav: true, // display panel that shows a list of stories
//   showPanel: true, // display panel that shows addon configurations
//   panelPosition: "bottom", // here to show the addon panel
//   sidebarAnimations: true, // sidebar tree animations
//   enableShortcuts: true, // enable/disable shortcuts
//   isToolshown: true, // show/hide tool bar
//   selectedPanel: undefined, // id to select an addon panel
// });
