import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { HomeStyles } from './HomeStyles.js'

const useStyle = makeStyles ((theme) => HomeStyles(theme));

export const HomeReal = () => {

  const classes = useStyle();
  return (
    <div className={classes.homeContainer}>
      <h1>Home Titulo</h1>
    </div>
  );
};