import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
// components
import ListProduct from '../Product/Lists';

const useStyles = createUseStyles({
  resultWrapper: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.9)',
    width: '100%',
    left: 0,
    top: 82,
    zIndex: 9,
    padding: '0 1.4rem 1.4rem',
    '& h3': {
      marginTop: '0!important'
    }
  }
});

const SearchResult = () => {
  const classes = useStyles();
  const setData = useSelector(state => state.productReducer);

  return (
    <div className={classes.resultWrapper}>
      <h3>Search Result</h3>
      <ListProduct products={setData.products}/>
    </div>
  )
}

export default SearchResult;