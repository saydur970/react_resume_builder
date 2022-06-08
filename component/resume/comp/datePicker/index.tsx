import { useState, FC } from 'react';
import {
  Grid, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText,
  DialogTitle, Dialog, IconButton, InputLabel
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
// icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Typo } from '../../../shared/typo';
import { SectionCard } from '../../../shared/sectionCard';
import { themeColor } from '../../../../lib/mui/theme';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const yearList = [
  1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
  2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039,
  2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049,
  2050
];

const monthList = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

interface IComp {
  currentYear: number;
  currentMonth: string;
  monthHandler: (value: string) => void;
  yearHandler: (value: number) => void;
}

export const DatePicker: FC<IComp> = ({ currentYear, currentMonth,
  monthHandler, yearHandler }) => {

  const [open, setOpen] = useState(false);
  const [currentType, setCurrentType] = useState<'year' | 'month'>('year');
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
    setCurrentType('year');
  };

  const handleClose = (value: string) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  const yearPickHandler = (year: number) => {
    setCurrentType('month');
    yearHandler(year)
  }

  const monthPickHandler = (month: string) => {
    monthHandler(month);
    setOpen(false);
  }

  const listRender = () => {

    if (currentType === 'year') {
      return (
        yearList.map(el => {
          return (
            <Grid key={el} item xs={12} sx={{ margin: '0.5rem 0', cursor: 'pointer' }}
              onClick={() => yearPickHandler(el)}
            >

              {
                currentYear === el ?
                  <Typo txt={el} align="center" size="2rem" color={themeColor.primary} /> :
                  <Typo txt={el} align="center" size="1.6rem" />
              }

            </Grid>
          )
        })
      )
    }

    return monthList.map(el => {
      return (
        <Grid key={el} item xs={4} sx={{ margin: '1.5rem 0', cursor: 'pointer' }}
          onClick={() => monthPickHandler(el)}
        >

          {
            currentMonth === el ?
              <Typo txt={el} align="center" size="2rem" color={themeColor.primary} /> :
              <Typo txt={el} align="center" size="1.6rem" />
          }

        </Grid>
      )
    })

  }

  return (

    <Grid item xs={12} container>

      <Grid item xs={12} sx={{marginBottom: '0.5rem'}} >
        <InputLabel sx={{marginLeft: '1.5rem'}} >
          Graduation Date
        </InputLabel>
      </Grid>


      <Grid item xs={12} container alignItems="center" >

        <Grid item xs={3}>
          <IconButton sx={{ transform: 'scale(1.4) translateY(-0.2rem)' }}
            onClick={handleClickOpen} >
            <CalendarMonthIcon />
          </IconButton>
        </Grid>

        <Grid item xs={9} >
          <Typo txt={`${currentMonth} ${currentYear}`} />
        </Grid>

        <Dialog onClose={handleClose} open={open}>

          <SectionCard Sx={{ minWidth: 300, maxWidth: 400 }} withoutPadding={true} >

            <Grid container >

              <Grid item xs={12} container sx={{
                backgroundColor: themeColor.primary, padding: '2rem'
              }}
              >
                <Grid item xs={12} onClick={() => setCurrentType('year')}
                  sx={{ cursor: 'pointer' }} >
                  <Typo txt={currentYear} variant="h3" size="2rem" />
                </Grid>
                <Grid item xs={12} onClick={() => setCurrentType('month')}
                  sx={{ cursor: 'pointer' }} >
                  <Typo txt={currentMonth} size="1.5rem" />
                </Grid>
              </Grid>

              <Grid item xs={12} container sx={{ overflowY: 'auto', maxHeight: '50vh' }} >

                {listRender()}

              </Grid>

            </Grid>

          </SectionCard>
        </Dialog>

      </Grid>
    </Grid>

  );
}
