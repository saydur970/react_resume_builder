import { useState, useEffect, Fragment } from 'react'
import { useResumeContext } from '../../context/resume.context';
import { Grid } from '@mui/material';
import { Typo } from '../../../shared/typo';
import { SectionModel } from '../sectionModel';
import { TxtField, TyTxtChangeHandlerParam } from '../../comp/txtField';
import { TySectionInputProperty } from '..';

export const AboutSection = () => {

  const { dataReducer, dataDispatch, utilState } = useResumeContext();
  const [aboutInput, setAboutInput] = useState<TySectionInputProperty>({
    isTouched: false,
    isValid: false,
    value: dataReducer.About,
    isOptional: false,
    errMsgList: []
  })

  useEffect(() => {

    if(aboutInput.isValid) {
      dataDispatch({ type: 'about', payload: aboutInput.value })
    }

  }, [aboutInput, dataDispatch])

  console.log(aboutInput);


  return (
    <Fragment>

      {
        utilState.currentSection === 'About' &&
        <SectionModel
          mainHeader="How can you describe yourself?"
          secondaryHeader="Include 2-3 sentences about yourself"

          childrenInput={(
          <Grid item xs={12}>
            <TxtField 
              label="Write about yourself"
              inputProp={aboutInput}
              setInputProp={setAboutInput}
              validators={[
                { type: 'required', errMsg: 'About section should not be empty' }
              ]}
            />
          </Grid>
          )}

        />
      }


      <Grid item xs={12} container >

        <Grid item xs={12}>
          <Typo txt={dataReducer.About || 'Include 2-3 sentences about yourself'} />
        </Grid>

      </Grid>

    </Fragment>
  )
};