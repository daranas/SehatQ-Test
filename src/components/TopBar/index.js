import React from 'react';
import { Grid, Icon, Input } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  topbarWrapper: {
    paddingTop: '12px!important',
    marginBottom: '5px!important',
  },
  iconLeft: {
    fontSize: 26,
    paddingTop: '8px!important',
    paddingLeft: '14px!important',
    paddingRight: '0!important'
  }
})

const TopBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid columns={2} className={classes.topbarWrapper}>
        <Grid.Row>
          <Grid.Column width={2} className={classes.iconLeft}>
            <Icon name='heart outline' />
          </Grid.Column>
          <Grid.Column width={14}>
            <Input fluid icon='search' iconPosition='left' placeholder='Search...' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default TopBar;