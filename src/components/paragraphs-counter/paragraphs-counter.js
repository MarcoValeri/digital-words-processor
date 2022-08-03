// Import style file
import './paragraphs-counter';


const ParagraphsCounter = ({content}) => {

    /**
     * Create a function that gets
     * @param string getContent
     * and
     * @return int as the number
     * of the paragraphs of a string
     */
    const paragraphsNumber = getContent => {

        const regex = /^.+$[nr]*/gm;
        const paragraphs = getContent.match(regex);
        const getParagraphsNum = paragraphs != null ? paragraphs.length : 0;

        return getParagraphsNum;

    }

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">Paragraphs</h4>
            <p className="words-counter__output-num">{paragraphsNumber(content)}</p>
        </div>
    )

}

export default ParagraphsCounter;
