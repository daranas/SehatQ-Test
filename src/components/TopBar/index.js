import React from 'react';
import { Container, Grid, Icon, Input } from 'semantic-ui-react';

const TopBar = () => {
  // style
  const topbarWrapper = {
    paddingTop: 12
  }

  const fontLeft = {
    fontSize: 26,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 0
  }

  return (
    <React.Fragment>
      <Container>
        <Grid columns={2} style={topbarWrapper}>
          <Grid.Row>
            <Grid.Column width={2} style={fontLeft}>
              <Icon name='heart outline' />
            </Grid.Column>
            <Grid.Column width={14}>
              <Input fluid icon='search' iconPosition='left' placeholder='Search...' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default TopBar;