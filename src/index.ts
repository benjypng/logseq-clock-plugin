import "@logseq/libs";
import callSettings from "./callSettings";

function main() {
  console.log("logseq-clock-plugin loaded");

  callSettings();

  const date = new Date();

  function clock(date: Date) {
    let options = {};

    options["hour12"] = logseq.settings!.twelveHourFormat;
    if (logseq.settings!.showSeconds) {
      options = options;
    } else {
      options["hour"] = "2-digit";
      options["minute"] = "2-digit";
    }

    const now = date.toLocaleTimeString([], options);

    return now;
  }

  function clockIcon(date: Date) {
    const hour = date.toLocaleTimeString([], { hour12: true }).substring(0, 2);

    return `<i class="ti ti-clock-hour-${hour}"></i>`;
  }

  logseq.provideStyle(`
											.clockPlugin {
												font-familiy: "Courier";
												font-size: 13px;
												padding: 0 3px;
											}
											`);

  // Register toolbar button UI
  window.setInterval(() => {
    logseq.App.registerUIItem("toolbar", {
      key: "logseq-clock-plugin",
      template: `<p class="clockPlugin">${clockIcon(date)} ${clock(date)}</p>`,
    });
  }, 1000);
}

logseq.ready(main).catch(console.error);
