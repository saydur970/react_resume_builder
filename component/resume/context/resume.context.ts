import { useState, useEffect, useContext, createContext, FC, Dispatch, SetStateAction } from 'react';
// style
import { TResumeSectionLayout } from '../types/resume_layout.type';

interface IResumeContext {
  sectionItemList: TResumeSectionLayout;
  setSectionItemList: Dispatch<SetStateAction<TResumeSectionLayout>>;
}

// @ts-ignore
export const ResumeContext = createContext<IResumeContext>({});

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  return context;
}