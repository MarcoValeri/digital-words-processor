// Import style file
import './regex-output.scss';

/**
 * content is a string of the content that should be analyzied.
 * regex is the regex logic
 */
const RegexOutput = ({title, content, regex}) => {

    /**
     * Create a function that gets
     * @param string getContent
     * and
     * @return int as the number
     * of the regex into a string
     */
    const regexNumber = (getContent, getRegex) => {

        const getRegexNum = getContent.match(getRegex);
        const output = getRegexNum != null ? getRegexNum.length : 0;

        return output;

    }

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">{title}</h4>
            <p className="words-counter__output-num">{regexNumber(content, regex)}</p>
        </div>
    )

}

export default RegexOutput;
