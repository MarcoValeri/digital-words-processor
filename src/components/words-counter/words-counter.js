import { useState } from 'react';

// Import components
import BaseOutput from '../base-output/base-output';
import ReadingTime from '../reading-time/reading-time';
import SentencesCounter from '../sentences-counter/sentences-counter';

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
                    <ReadingTime words={words.length > 0 && wordsNum !== null ? wordsNum.length : 0} />
                    <SentencesCounter content={words} />
                </div>
                <div className="words-counter__textarea-container">
                    <textarea className="words-counter__textarea" placeholder="Type or paste your text" onKeyUp={handleWords}></textarea>
                </div>
            </div>
        </div>
    )
}

export default WordsCounter;
