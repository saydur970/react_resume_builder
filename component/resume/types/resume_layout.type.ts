type TResumeSectionItem = { sectionName: string; }

export interface IResumeSection {
  activeLinearList: TResumeSectionItem[];
  activeLeftList: TResumeSectionItem[];
  activeRightList: TResumeSectionItem[];
  deactiveList: TResumeSectionItem[];
}

