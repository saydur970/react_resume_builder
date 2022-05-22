import { TResumeDataState } from '../types/resume_state.type'

export const resumeDataReducer = (state:TResumeDataState): TResumeDataState => {

  return {

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

    about: {
      data: { errMsg: null, value: '' },
      validation: { isValid: false, isChecked: false }
    },

    experiences: {
      data: { },
      err: { errMsg: null },
      validation: { isValid: false, isChecked: false }
    },

    education: {
      data: {},
      err: { errMsg: null },
      validation: { isValid: false, isChecked: false }
    },

    skills: {
      data: {},
      err: { errMsg: null },
      validation: { isValid: false, isChecked: false }
    }

  }


}