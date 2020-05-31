import React from 'react';
import { Helmet } from 'react-helmet';
import { createUseStyles } from 'react-jss';
import { Container, Divider, Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
  authWrapper: {
    padding: '5rem 1.5rem 0',
    '& .button': {
      marginBottom: 10
    },
    '& .divider': {
      margin: '2rem 0'
    }
  },
  imgLogo: {
    textAlign: 'center',
    margin: '0 auto',
    '& img': {
      height: 54,
      marginBottom: 22
    }
  }
});

const AuthPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const loggedIn = () => {
    localStorage.setItem('loggedIn', true);
    history.push({
      pathname: '/',
    });
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Login</title>
      </Helmet>
      
      <Container>
        <div className={classes.authWrapper}>
          <div className={classes.imgLogo}>
            <img src="/assets/images/logo.svg" alt="logo" />
          </div>
          <Form onSubmit={loggedIn}>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' required />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder='Password' required />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Remember me' />
            </Form.Field>
            <Button type='submit' primary>Sign In</Button>
          </Form>
          <Divider horizontal>or</Divider>
          <Button color='facebook' fluid onClick={loggedIn}>
            <Icon name='facebook' /> Sign in with Facebook
          </Button>
          <Button color='google plus' fluid onClick={loggedIn}>
            <Icon name='google' /> Sign in with Google
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default AuthPage;