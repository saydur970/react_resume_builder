import { TSectionItemName } from "./resume_state.type";

export interface IResumeUtilState {
  isSectionModelOpen: boolean;
  currentSection: TSectionItemName|null;
}