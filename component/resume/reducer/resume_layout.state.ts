import { TResumeSectionLayout } from "../types/resume_layout.type";

export const resumeSectionLayoutState: TResumeSectionLayout = {

  activeLinearList: [],
  
  activeLeftList: [
    { sectionName: 'Work' },
    { sectionName: 'Education' }
  ],

  activeRightList: [
    { sectionName: 'Skills' },
    { sectionName: 'Projects' },
  ],

  deactiveList: [
    { sectionName: 'Experience' },
    { sectionName: 'References' },
    { sectionName: 'Awards' },
    { sectionName: 'Interests' },
    { sectionName: 'Technology Skills' },
    { sectionName: 'Volunteer' },
    { sectionName: 'Publications' },
    { sectionName: 'Language' },
    { sectionName: 'Certificates' },
    { sectionName: 'Memberships' },
    { sectionName: 'Leadership' },
    { sectionName: 'Teaching' },
    { sectionName: 'Conferences and Courses' },
  ]



}