
type fieldErrorMsg = { errMsg: string|null };

type TIsSectionValid = { isValid: boolean; isChecked: boolean }

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
  },

  about: {
    data: fieldErrorMsg & { value: string; };
    validation: TIsSectionValid;
  },

  experiences: {
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

  education: {
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

  skills: {
    data: {
      [key: number]: fieldErrorMsg & { value: string };
    };
    err: fieldErrorMsg;
    validation: TIsSectionValid
  };

}

