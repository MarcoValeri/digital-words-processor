// Import style file
import './sentences-counter';

const SentencesCounter = ({content}) => {

    /**
     * Create a function that gets
     * @param string getContent
     * and
     * @return int as the number
     * of the sentences of a string
     */
    const sentencesNumber = getContent => {

        // const regex = /[!?.]+(?=$|\s)/g;
        const regex = /^.+$[nr]*/gm;
        const sentences = getContent.match(regex);
        const getSentencsNum = sentences != null ? sentences.length : 0;

        return getSentencsNum;

    }

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">Sentences</h4>
            <p className="words-counter__output-num">{sentencesNumber(content)}</p>
        </div>
    )
}

export default SentencesCounter;
