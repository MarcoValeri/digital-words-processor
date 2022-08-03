import { useState } from 'react';

// Import components
import BaseOutput from '../base-output/base-output';
import RegexOutput from '../regex-output/regex-output';
import TimeOutput from '../time-output/time-output';

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
        <div className='words-counter'>
            <div className="words-counter__grid">
                <div className="words-counter__output-container">
                    <BaseOutput baseTitle="Words number" baseOutput={wordsNum ? wordsNum.length : 0} />
                    <BaseOutput baseTitle="Characters" baseOutput={words.length} />
                    <RegexOutput title="Sentences" content={words} regex={/[!?.]+(?=$|\s)/g} />
                    <RegexOutput title="Paragraphs" content={words} regex={/^.+$[nr]*/gm} />
                    <TimeOutput wordsForMinute={200} title="Reading Time" content={words.length > 0 && wordsNum !== null ? wordsNum.length : 0} />
                    <TimeOutput wordsForMinute={180} title="Speaking Time" content={words.length > 0 && wordsNum !== null ? wordsNum.length : 0} />
                </div>
                <div className="words-counter__textarea-container">
                    <textarea className="words-counter__textarea" placeholder="Type or paste your text" onKeyUp={handleWords}></textarea>
                </div>
            </div>
        </div>
    )
}

export default WordsCounter;
