import React from "react";
import css from '../lib/css';

export const StylesWordCount = () => (
  <style>
    {
      css`
      
    #heading {
        border: 0px;
        padding: 5px;
        font-weight: 700;
        text-align: center;
        width: 400px;
    }
      
    #area {
        height: 200px;
        width: 100%;
        resize: none;
        font-size: 15px;
        font-weight: 700;
        padding: 5px;
        margin-top: 15px;
        color: solid grey;
        outline: none;
        border: 1px solid grey;
    }
      
    #area:focus {
        border: 2px black;
        outline: none;
    }
      
    .output {
        color: black;
        font-size: 16px;
        text-align: left;
        font-weight: 700;
        border: 0px;
        margin-top: 5px;
    }
    .wrapper {
      display: flex;
      justify-content: space-evenly;
    }
    #word,
    #char {
        font-size: 25px;
        font-weight: bold;
        } 
      `
    }
  </style>
);