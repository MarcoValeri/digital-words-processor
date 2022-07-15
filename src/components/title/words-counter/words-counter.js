import { useState } from 'react';

// Import scss file
import './words-counter.scss';
import React from 'react';

const WordsCounter = () => {

    // Set Hooks
    const [words, setWords] = useState('');
    const [wordsNum, setWordsNum] = useState(0);

    // Event
    const handleWords = event => {
        setWords(event.target.value);
        setWordsNum(event.target.value.match(/\b[-?(\w+)?]+\b/gi));
    }

    return (
        <div>
            <h2>Testing Words Counter component</h2>
            <textarea onKeyUp={handleWords}></textarea>
            <p>Your words: {words}</p>
            <p>Words number: {wordsNum ? wordsNum.length : 0}</p>
        </div>
    )
}

export default WordsCounter;
