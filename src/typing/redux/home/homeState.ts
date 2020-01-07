export type FocusedAreaTypes =
  | "umashibaPort"
  | "works"
  | "skills"
  | "contact"
  | "";

export interface HomeState {
  focusedArea: FocusedAreaTypes;
  homeFirstArrived: boolean;
}
