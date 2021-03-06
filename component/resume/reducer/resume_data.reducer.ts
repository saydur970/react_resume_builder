import { TResumeDataDispatchAction, TResumeDataReducer } from '../types/resume_state.type';

export const resumeDataReducerInitial: TResumeDataReducer = {

  initial_data: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    district: '',
    division: ''
  },

  About: '',

  Experiences: {},

  Education: {},

  Skills: [],

  Work: '',

  Projects: '',

  References: ''

};

export const resumeDataReducer = 
(state:TResumeDataReducer, action: TResumeDataDispatchAction): TResumeDataReducer => {

  switch(action.type) {

    // ==================== Handle About section =========================
    case 'about': {

      return {
        ...state,
        About: action.payload
      }

    }

    // ==================== Skill Add section =========================
    case 'skills_add': {
      return {
        ...state,
        Skills: [...state.Skills, action.payload]
      }
    }

    // ==================== Skill remove section =========================
    case 'skills_remove': {
      const newSkillList = [...state.Skills];
      newSkillList.splice(action.payload, 1);

      return {
        ...state,
        Skills: [...newSkillList]
      }
    }



    default:
      return state;



  }


}