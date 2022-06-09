export type input_validators = 
  { type: 'required'; errMsg: string; } |
  { type: 'minLength'; value: number; errMsg: string; } |
  { type: 'maxLength'; value: number; errMsg: string; };

export const inputValidate = (value: string|number, validators: input_validators[]) => {

  let isValid = true;
  let errMsg: string[] = [];

  validators.forEach(el => {

    if (el.type === 'required') {
      isValid = isValid && value.toString().trim().length > 0;
      if(!isValid) errMsg.push(el.errMsg);
    }

    if(el.type === 'maxLength') {
      isValid = isValid && value.toString().trim().length <= el.value;
      if(!isValid) errMsg.push(el.errMsg);
    }

    if(el.type === 'minLength') {
      isValid = isValid && value.toString().trim().length >= el.value;
      if(!isValid) errMsg.push(el.errMsg);
    }

  })

  return { isValid, errMsg};
};