import { SkillsPageState } from "../../typing/redux/skillsPage/skillsPageState";

export const changeClickedTag = (
  clickedTag: SkillsPageState["clickedTag"],
  state: SkillsPageState
) => {
  return { ...state, ...{ clickedTag } };
};
