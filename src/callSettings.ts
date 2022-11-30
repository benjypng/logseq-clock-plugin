import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";

export default function callSettings() {
  const settings: SettingSchemaDesc[] = [
    {
      key: "showSeconds",
      type: "boolean",
      default: true,
      title: "Default Page",
      description: "Show seconds on the clock.",
    },
    {
      key: "twelveHourFormat",
      type: "boolean",
      default: true,
      title: "12 Hours Format",
      description:
        "If true, clock will show in 12-hours format. If false, it will be 24-hours format.",
    },
  ];
  logseq.useSettingsSchema(settings);
}
