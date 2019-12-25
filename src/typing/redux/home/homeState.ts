export type FocusedAreaTypes =
  | "umashibaPort"
  | "works"
  | "technology"
  | "contact"
  | "";

export interface HomeState {
  focusedArea: FocusedAreaTypes;
}
