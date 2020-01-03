import { SkillsPageState } from "../../typing/redux/skillsPage/skillsPageState";
import { CHANGE_CLICKED_TAG } from "../constants/skillsPageTypes";

export interface ChangeClickedTagAction {
  type: typeof CHANGE_CLICKED_TAG;
  payload: SkillsPageState["clickedTag"];
}

type skillsPageActionTypes = ChangeClickedTagAction;

export default skillsPageActionTypes;
