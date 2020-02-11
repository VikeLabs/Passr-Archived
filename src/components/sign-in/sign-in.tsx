import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import color from '@material-ui/core/colors/deepOrange';
import { Color } from 'csstype';

interface Props {
  isSignedIn: boolean
  changeSignIn: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

export default function SignInButton(props: Props) {
  const classes = useStyles();
  let buttonText = ''

  if(props.isSignedIn) {
    buttonText = 'Sign Out'
  } else {
    buttonText = 'Sign In'  }

  return (
    <div>
      <Button variant='contained' color='secondary' className={classes.button} onClick={props.changeSignIn}>
        {buttonText}
      </Button>
    </div>
  );
}
