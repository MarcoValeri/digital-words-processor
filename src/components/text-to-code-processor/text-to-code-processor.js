import { useState } from 'react';

// Import style file
import './text-to-code-processor.scss';

const TextToCodeProcessor = () => {

    // Set Hooks
    const [ words, setWords ] = useState('');

    // Event
    const handleWords = event => {

        let getWords = event.target.value;
        let flag = '';
        let output = '<p>';

        for (let x = 0; x < getWords.length; x++) {
            if (getWords[x] === "\n") {
                output += `</p><p>${getWords[x]}`;
            } else {
                output += `${getWords[x]}`;
            }
        }

        setWords(output);
    }

    return (
        <div className='text-to-code-processor'>
            <div className="text-to-code-processor__grid">
                <div className="text-to-code-processor__textarea-container">
                    <textarea className="text-to-code-processor__textarea" placeholder="Type or paste your text" onKeyUp={handleWords}></textarea>
                </div>
                <div className="text-to-code-processor__output-container">
                    <p>output:</p>
                    <p>{ words }</p>
                </div>
            </div>
        </div>
    )
}

export default TextToCodeProcessor;
