import { useContext, createContext, Dispatch, SetStateAction } from 'react';
// types
import { TResumeSectionLayout } from '../types/resume_layout.type';
import { TResumeDataDispatchAction, TResumeDataReducer } from '../types/resume_state.type';
import { IResumeUtilState } from '../types/resume_util.type';

interface IResumeContext {
  sectionItemList: TResumeSectionLayout;
  setSectionItemList: Dispatch<SetStateAction<TResumeSectionLayout>>;
  dataReducer: TResumeDataReducer;
  dataDispatch: Dispatch<TResumeDataDispatchAction>
  utilState: IResumeUtilState;
  setUtilState: Dispatch<SetStateAction<IResumeUtilState>>;
}

// @ts-ignore
export const ResumeContext = createContext<IResumeContext>({});

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  return context;
}