export type TResumeSectionItem = { sectionName: string; }

export type TResumeSectionName = 
'activeLinearList'| 'activeLeftList'| 'activeRightList'| 'deactiveList';

export type TResumeSectionLayout = {
  [key in TResumeSectionName]: TResumeSectionItem[];
}

// export interface IResumeSectionLayout {
//   activeLinearList: TResumeSectionItem[];
//   activeLeftList: TResumeSectionItem[];
//   activeRightList: TResumeSectionItem[];
//   deactiveList: TResumeSectionItem[];
// }

