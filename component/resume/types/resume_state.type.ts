type fieldErrorMsg = { errMsg: string|null };

type TIsSectionValid = { isValid: boolean; isChecked: boolean }

export type TSectionItemName = 'initial_data'| 'About'| 'Experiences'| 'Education'|
'Skills'| 'Work'| 'Projects'| 'References';

export type TResumeDataReducer = {

  initial_data: {
    data: {
      firstName: fieldErrorMsg & { value: string };
      lastName: fieldErrorMsg & { value: string };
      email: fieldErrorMsg & { value: string };
      phoneNumber: fieldErrorMsg & { value: string };
      address: fieldErrorMsg & { value: string };
      district: fieldErrorMsg & { value: string };
      division: fieldErrorMsg & { value: string };
    };
    validation: TIsSectionValid
  };

  About: {
    data: fieldErrorMsg & { value: string; };
    validation: TIsSectionValid;
  };

  Experiences: {
    data: {
      [key: number]: {
        organizationName: fieldErrorMsg & { value: string };
        role: fieldErrorMsg & { value: string };
        startDate: fieldErrorMsg & { value: Date };
        endDate?: fieldErrorMsg & { value: Date };
        isCurrentlyEmployed: fieldErrorMsg & { value: boolean };
        district: fieldErrorMsg & { value: string };
        division: fieldErrorMsg & { value: string };
        comment?: fieldErrorMsg & { value: string };
      };
    };
    err: fieldErrorMsg;
    validation: TIsSectionValid
  };

  Education: {
    data: {
      [key: number]: {
        instituteName: fieldErrorMsg & { value: string };
        subject: fieldErrorMsg & { value: string };
        completionDate: fieldErrorMsg & { value: Date };
        result?: fieldErrorMsg & { value: string };
        comment?: fieldErrorMsg & { value: string };
      };
    };
    err: fieldErrorMsg;
    validation: TIsSectionValid
  };

  Skills: {
    data: string[];
    err: fieldErrorMsg;
    validation: TIsSectionValid
  };

  // Skills: {
  //   data: {
  //     [key: number]: fieldErrorMsg & { value: string };
  //   };
  //   err: fieldErrorMsg;
  //   validation: TIsSectionValid
  // };

  Work: {
    data: fieldErrorMsg & { value: string; };
    validation: TIsSectionValid;
  };

  Projects: {
    data: fieldErrorMsg & { value: string; };
    validation: TIsSectionValid;
  },

  References: {
    data: {
      [key: number]: fieldErrorMsg & { value: string };
    };
    err: fieldErrorMsg;
    validation: TIsSectionValid;
  }

}


export type TResumeDataDispatchAction =
  { type: 'initial_data_name', payload: string } |
  { type: 'skills_add', payload: string } |
  { type: 'skills_remove', payload: number }

