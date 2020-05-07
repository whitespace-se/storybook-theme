import "./storybook.scss";
import "./custom.scss";

import Sidebar from "../sidebar/sidebar.html";
import previewWrapper from "../previewWrapper/previewWrapper.html";

export default {
  title: "Storybook",
};

export const standard = () =>
  '<div class="custom">' + Sidebar + previewWrapper + "</div>";
