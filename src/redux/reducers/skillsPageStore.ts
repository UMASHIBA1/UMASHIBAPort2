import { SkillsPageState } from "../../typing/redux/skillsPage/skillsPageState";
import { changeClickedTag } from "../actions/skillsPageAction";
import skillsPageActionTypes from "../actionTypes/skillsPageActionTypes";
import { CHANGE_CLICKED_TAG } from "../constants/skillsPageTypes";
import skillsPageState from "../firstState/skillsPageState";

const skillsPageStore = (
  state: SkillsPageState = skillsPageState,
  action: skillsPageActionTypes
) => {
  switch (action.type) {
    case CHANGE_CLICKED_TAG:
      return changeClickedTag(action.payload, state);
    default:
      return state;
  }
};

export default skillsPageStore;
