import { useContext, createContext, Dispatch, SetStateAction } from 'react';
// types
import { TResumeSectionLayout } from '../types/resume_layout.type';
import { TResumeDataReducer } from '../types/resume_state.type';

interface IResumeContext {
  sectionItemList: TResumeSectionLayout;
  setSectionItemList: Dispatch<SetStateAction<TResumeSectionLayout>>;
  resumeDataReducer: TResumeDataReducer
}

// @ts-ignore
export const ResumeContext = createContext<IResumeContext>({});

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  return context;
}