import React, { useState } from 'react';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './SignIn.styles';

const SignIn = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState('');
  const styles = useStyles();

  return (
    <div className={styles.signinForm}>
      <form noValidate autoComplete="off">
        <Input
          id="username"
          label="username"
          inputProps={{ maxLength: 10 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={inputValue.trim().length === 0}
          onClick={() => setUsername(inputValue)}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
