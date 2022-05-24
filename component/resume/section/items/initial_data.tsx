import React from 'react'
// context
import { useResumeContext } from '../../context/resume.context';

export const InitialData = () => {

  const { resumeDataReducer } = useResumeContext();

  return (
    <div>initial_data</div>
  )
};