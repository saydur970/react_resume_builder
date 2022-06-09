type fieldErrorMsg = { errMsg: string|null };

type TIsSectionValid = { isValid: boolean; isChecked: boolean }

export type TSectionItemName = 'initial_data'| 'About'| 'Experiences'| 'Education'|
'Skills'| 'Work'| 'Projects'| 'References';

export type TResumeDataReducer = {

  initial_data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    district: string;
    division: string;
  };

  About: string;

  Experiences: {
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

  Education: {
    [key: number]: {
      instituteName: fieldErrorMsg & { value: string };
      subject: fieldErrorMsg & { value: string };
      completionDate: fieldErrorMsg & { value: {
        year: number; month: string;
      }|null };
      result?: fieldErrorMsg & { value: string };
      comment?: fieldErrorMsg & { value: string };
    };
  };

  Skills: string[];

  // Skills: {
  //   data: {
  //     [key: number]: fieldErrorMsg & { value: string };
  //   };
  //   err: fieldErrorMsg;
  //   validation: TIsSectionValid
  // };

  Work: string;

  Projects: string;

  References: string

}


export type TResumeDataDispatchAction =
  { type: 'initial_data_name', payload: string } |
  { type: 'about', payload: string } |
  { type: 'skills_add', payload: string } |
  { type: 'skills_remove', payload: number }

