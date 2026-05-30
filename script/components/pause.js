window.Components.pause = {
  animate(tl, el, config) {
    const duration = config.sections.find(s => s.type === "pause")?.duration || 2;

    // Just hold timeline
    tl.to({}, { duration });
  },

  render(container) {
    const div = document.createElement("div");
    div.style.display = "none";
    container.appendChild(div);
    return div;
  }
};