import React, { useState } from 'react';
import { StylesWordCount } from './stylesWordCount';

const EXTENSION_ID = 'amy.character-count';

const WordCount = () => {
  const [wordcount, setwordcount] = useState (0)
  const [charcount, setcharcount] = useState (0)
  const count = (event) => {console.log (event)

  
    // count characters 
    let content = event.target.value;
  
    // remove empty spaces from start and end 
    content.trim();
  
    let wordList = content.split(/\s/);
  
    // Remove spaces from between words 
    let words = wordList.filter(function (element) {
        return element != "";
    });
  
    // count words 
    setwordcount (words.length);
    setcharcount (content.length);
  }
  return (
  <>
    <textarea id="area" name="freeform" onInput={count} placeholder="Paste your text here">
      
    </textarea>
    <div className="wrapper">
    <div className="output">Word Count = {wordcount}</div>
    <div className="output">Character Count = {charcount}</div>
    </div>
  </>
  );
};

aha.on('wordCount', ({ record, fields }, { settings }) => {
  return (
    <>
    <StylesWordCount></StylesWordCount>
      <WordCount></WordCount>
    </>
  );
});
