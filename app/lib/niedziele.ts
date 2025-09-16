import { fromZonedTime, toZonedTime } from "date-fns-tz";

const timeZone = "Europe/Warsaw";
const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone,
});

const niedzieleHandlowe = [
  new Date("2025-01-26"),
  new Date("2025-04-13"),
  new Date("2025-04-27"),
  new Date("2025-06-29"),
  new Date("2025-08-31"),
  new Date("2025-12-07"),
  new Date("2025-12-14"),
  new Date("2025-12-21"),

  new Date("2026-01-25"),
  new Date("2026-03-29"),
  new Date("2026-04-26"),
  new Date("2026-06-28"),
  new Date("2026-08-30"),
  new Date("2026-12-06"),
  new Date("2026-12-13"),
  new Date("2026-12-20"),
].map((d) => {
  d.setHours(0, 0, 0, 0);
  return fromZonedTime(d, timeZone);
});

export function getNextNiedzielaHandlowa(): Date | undefined {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const zonedToday = toZonedTime(today, timeZone);
  return niedzieleHandlowe.find((d) => d >= zonedToday);
}

export function getNiedzieleHandloweInYear(year: number): Date[] {
  return niedzieleHandlowe.filter((d) => d.getFullYear() === year);
}

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
