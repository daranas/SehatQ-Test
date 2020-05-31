import React, { useState } from 'react';
import { Grid, Icon, Input } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
// components
import SearchResult from './searchResult';

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
  },
  searchInput: {
    position: 'relative',
    '& input': {
      borderRadius: '30px!important'
    }
  },
  pointer: {
    cursor: 'pointer'
  }
});

const TopBar = (props) => {
  const [search, setSearch] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 1) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }

  return (
    <React.Fragment>
      <Grid columns={2} className={classes.topbarWrapper}>
        <Grid.Row>
          <Grid.Column width={2} className={classes.iconLeft}>
            {!props.withBack &&
            <Icon name='heart outline' />
            }
            {props.withBack &&
            <Icon name='arrow left' className={classes.pointer} onClick={goBack} />
            }
          </Grid.Column>
          <Grid.Column width={14} className={classes.searchInput}>
            <Input fluid icon='search' iconPosition='left' onChange={handleChange} placeholder='Search...' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {search &&
        <SearchResult/>
      }
    </React.Fragment>
  )
}

export default TopBar;