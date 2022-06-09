import { useState, Fragment } from 'react';
import { resumeFontSize } from '../..';
import { useResumeContext } from '../../context/resume.context';
import { Grid, IconButton } from '@mui/material';
import { Typo } from '../../../shared/typo';
import { SectionModel } from '../sectionModel';
import { TxtField } from '../../comp/txtField';
// icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const skillList = [
  'Research skills', 'English', 'Problem Solving', 'Critical Thinking',
  'Software proficiency', 'Communication Skills', 'Typing skills',
  'Organization Skills', 'Creativity', 'Writing and editing',
  'Design', 'Microsoft Office', 'Marketing', 'Administrative',
  'Customer service'
]


export const SkillSection = () => {

  const [customSkill, setCustomSkill] = useState('');
  const { dataReducer, utilState, dataDispatch } = useResumeContext();

  const submitHanlder = () => {
    if (customSkill) {
      dataDispatch({
        type: 'skills_add',
        payload: customSkill
      });
      setCustomSkill('');
    }
  }


  return (
    <Fragment>

      {
        utilState.currentSection === 'Skills' &&
        <SectionModel
          mainHeader="What are your stand-out skills?"
          secondaryHeader="Share the skills that make you shine"

          childrenInput={(
            <Grid item xs={12} container>

              <Grid item xs={12} sx={{marginBottom: '2rem'}} >
                <TxtField value={customSkill}
                  setState={setCustomSkill}
                  submitHanlder={submitHanlder}
                  label="What are your stand-out skills?"
                />
              </Grid>

              <Grid item xs={12} container>
                {
                  dataReducer.Skills.map((el, idx) => (
                    <div key={`${el}_${idx}`}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginRight: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem',
                        paddingLeft: '0rem', border: '0.1rem solid #ccc'
                      }}
                    >
                      <IconButton sx={{ transform: 'translateY(0.2rem)' }}
                        onClick={() => dataDispatch({ type: 'skills_remove', payload: idx }) }
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typo txt={el} margin="0rem" size="1.2rem" />
                    </div>
                  ))
                }
              </Grid>

            </Grid>
          )}

          childrenExample={(
            <>
              <Grid item xs={12} container sx={{ overflowY: 'auto' }} >
                {
                  skillList.map((el, idx) => (
                    <Grid key={`${el}_${idx}`} item xs={12} container
                      alignItems="center"
                      sx={{
                        padding: '1rem 2rem', margin: '1rem 0',
                        border: '0.1rem solid #ccc', cursor: 'pointer'
                      }}
                      onClick={() => {
                        dataDispatch({
                          type: 'skills_add',
                          payload: el
                        });
                      }}
                    >
                      <IconButton sx={{ marginRight: '1rem' }} >
                        <AddIcon sx={{ transform: 'scale(1.5)' }} />
                      </IconButton>
                      <Typo txt={el} margin="0rem" />
                    </Grid>
                  ))
                }
              </Grid>
            </>
          )}

        />
      }

      <Grid item xs={12} container >

        <Grid item xs={12} container >
          {
            dataReducer.Skills.length > 0 ?
              <Typo size={resumeFontSize} txt={dataReducer.Skills.join(', ')} />
              :
              <Typo txt={
                // dataReducer.About.value || 'Enter 3-4 skills'
                'Enter 3-4 skills'
              } />
          }
        </Grid>

      </Grid>

    </Fragment>
  )


};