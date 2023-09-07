import { ReactComponent as Event } from "../icons/event.svg";
import { ReactComponent as Care } from "../icons/care.svg";
import { ReactComponent as Meal } from "../icons/meal.svg";
import { ReactComponent as Trip } from "../icons/trip.svg";
import { ReactComponent as Play } from "../icons/playtime.svg";
import { ReactComponent as Other } from "../icons/other.svg";
import { ReactComponent as Celeb } from "../icons/celeb.svg";

export const clockTimings = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "13PM",
  "14PM",
  "15PM",
  "16PM",
  "17PM",
  "18AM",
  "19AM",
  "20AM",
  "21AM",
  "22AM",
  "23AM",
];
export const limit = 30;
export const events = [
  "Events",
  "Celebration",
  "Trip",
  "With Caregiver(s)",
  "Meal",
  "Playtime",
  "Others",
];
export const days = [
  { val: "M", day: "Monday", active: false },
  { val: "T", day: "Tuesday", active: false },
  { val: "W", day: "Wednesday", active: false },
  { val: "T", day: "Thursday", active: false },
  { val: "F", day: "Friday", active: false },
];

export const IconArray = [
  <Event />,
  <Celeb />,
  <Trip />,
  <Care />,
  <Meal />,
  <Play />,
  <Other />,
];
