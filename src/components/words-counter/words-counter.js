import { useState } from 'react';

// Import components
import ReadingTime from '../reading-time/reading-time';

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
                    <div className="words-counter__output">
                        <h4 className="words-counter__output-title">Words number</h4>
                        <p className="words-counter__output-num">{wordsNum ? wordsNum.length : 0}</p>
                    </div>
                    <div className="words-counter__output">
                        <h4 className="words-counter__output-title">Characters</h4>
                        <p className="words-counter__output-num">{words.length}</p>
                    </div>
                    <ReadingTime words={wordsNum.length} />
                </div>
                <div className="words-counter__textarea-container">
                    <textarea className="words-counter__textarea" placeholder="Type or paste your text" onKeyUp={handleWords}></textarea>
                </div>
            </div>
        </div>
    )
}

export default WordsCounter;
