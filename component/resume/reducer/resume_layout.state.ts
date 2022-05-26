import { TResumeSectionLayout } from "../types/resume_layout.type";
import { IResumeUtilState } from "../types/resume_util.type";

export const resumeSectionLayoutState: TResumeSectionLayout = {

  activeLinearList: [],
  
  activeLeftList: [
    { sectionName: 'Work' },
    { sectionName: 'Education' },
  ],

  activeRightList: [
    { sectionName: 'Skills' },
    { sectionName: 'Projects' },
  ],

  deactiveList: [
    { sectionName: 'Experiences' },
    { sectionName: 'References' },

    // { sectionName: 'Awards' },
    // { sectionName: 'Interests' },
    // { sectionName: 'technology_skills' },
    // { sectionName: 'Volunteer' },
    // { sectionName: 'Publications' },
    // { sectionName: 'Language' },
    // { sectionName: 'Certificates' },
    // { sectionName: 'Memberships' },
    // { sectionName: 'Leadership' },
    // { sectionName: 'Teaching' },
    // { sectionName: 'conferences_and_courses' },
    
  ]

}

export const resumeUtilState: IResumeUtilState = {
  isSectionModelOpen: true
}