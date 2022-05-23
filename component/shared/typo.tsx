import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

interface ITypo {
  txt: string | number;
  color?: string;
  size?: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  margin?: string;
  dotted?: boolean,
  isInherit?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  weight?: number;
  styleAdd?: { [key: string]: string|number }
}

export const Typo: FC<ITypo> = ({ txt, size, align, margin, variant, color,
  dotted, isInherit, weight, styleAdd }) => {

  let sz: string;
  const al = align || 'left';
  const mg = '0 0 1rem 0';
  let isWrap = false;
  if (dotted === true) {
    isWrap = true;
  }

  // define sizes
  if (size) {
    sz = size
  } else {
    switch (variant) {
      case 'p':
        sz = '1.5rem';
        break;
      case 'h1':
        sz = '3rem';
        break;
      case 'h2':
        sz = '2.5rem'
        break;
      case 'h3':
        sz = '2rem'
        break;
      case 'h4':
        sz = '1.5rem'
        break;
      case 'h5':
        sz = '1.2rem'
        break;
      default:
        sz = '1.5rem'
    }

  }

  const additionalStyle = {
    ...(styleAdd && styleAdd),
    ...(weight && { fontWeight: weight }),
    fontSize: sz,
    margin: margin ? margin : mg,
  }

  if (!variant || variant === 'p') {

    return (
      <Typography variant="body2" component="p" align={al}
        color={color? color: isInherit ? 'textSecondary' : 'textPrimary'}
        // color={color? color: '#000'}
        noWrap={isWrap} style={additionalStyle}
      >
        {txt}
      </Typography>
    )

  }

  return (
    <Typography variant={variant} align={al}
      noWrap={isWrap} style={additionalStyle}
      >
      {txt}
    </Typography>
  )
}


interface IEmptyDataTypo {
  txt: string | number;
}

export const EmptyDataTypo: FC<IEmptyDataTypo> = ({ txt }) => {
  return (
    <Grid item xs={12} container alignItems="center" justifyContent="center"
      style={{ height: '50vh' }} >
      <Typography variant="h2" align="center" >
        {txt}
      </Typography>
    </Grid>
  )
}