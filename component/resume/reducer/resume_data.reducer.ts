import { TResumeDataDispatchAction, TResumeDataReducer } from '../types/resume_state.type';

export const resumeDataReducerInitial: TResumeDataReducer = {

  initial_data: {
    data: {
      firstName: { errMsg: null, value: '' },
      lastName: { errMsg: null, value: '' },
      email: { errMsg: null, value: '' },
      phoneNumber: { errMsg: null, value: '' },
      address: { errMsg: null, value: '' },
      district: { errMsg: null, value: '' },
      division: { errMsg: null, value: '' },
    },
    validation: { isValid: false, isChecked: false }
  },

  About: {
    data: { errMsg: null, value: '' },
    validation: { isValid: false, isChecked: false }
  },

  Experiences: {
    data: { },
    err: { errMsg: null },
    validation: { isValid: false, isChecked: false }
  },

  Education: {
    data: {},
    err: { errMsg: null },
    validation: { isValid: false, isChecked: false }
  },

  Skills: {
    data: {},
    err: { errMsg: null },
    validation: { isValid: false, isChecked: false }
  },

  Work: {
    data: { errMsg: null, value: '' },
    validation: { isValid: false, isChecked: false }
  },

  Projects: {
    data: { errMsg: null, value: '' },
    validation: { isValid: false, isChecked: false }
  },

  References: {
    data: {},
    err: { errMsg: null },
    validation: { isValid: false, isChecked: false }
  }

};

export const resumeDataReducer = 
(state:TResumeDataReducer, action: TResumeDataDispatchAction): TResumeDataReducer => {

  switch(action.type) {

    case 'initial_data_name': {
      
      // ==================== Handle About section =========================
      const currentVal = state.About;

      return {
        ...state,
        About: {
          ...currentVal,
          data: {
            ...currentVal.data,
            value: action.payload
          }
        }
      }

    }



  }


  return {...state}


}