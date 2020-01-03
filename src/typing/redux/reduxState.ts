import { HomeState } from "./home/homeState";
import { SkillsPageState } from "./skillsPage/skillsPageState";

export default interface ReduxStateType {
  homeState: HomeState;
  skillsPageState: SkillsPageState;
}
