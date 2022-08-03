// Import file style
import './time-output.scss';

const TimeOutput = ({wordsForMinute, title, content}) => {

    /**
     * Create a function that gets
     * @param int seconds
     * and
     * @return string with
     * formatted time like 01:15:35
     */
     const formatSeconds = seconds => {

        const getHours = Math.floor(seconds / 3600);
        const formatHours = getHours < 10 ? `0${getHours}` : getHours;

        const getMinutes = Math.floor((seconds - (getHours * 3600)) / 60);
        const formatMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;

        const getSeconds = Math.floor(seconds - (getHours * 3600) - (getMinutes * 60));
        const formatSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

        let output = `Error`;

        if (seconds === 1) {
            output = `1 second`;
        } else if (seconds < 60 && seconds !== 1) {
            output = `${formatSeconds} seconds`;
        } else if (seconds === 60) {
            output = `1 minute`;
        } else if (seconds > 60 && seconds < 3600) {
            output = `${formatMinutes}:${formatSeconds} minutes`;
        } else if (seconds === 3600) {
            output = `1 hour`;
        } else if (seconds > 3600) {
            output = `${formatHours}:${formatMinutes}:${formatSeconds} hours`;
        }

        return output;

    }

    /**
     * Create a function that determines
     * the Reading Time following this rule:
     * 1 minute for wordsForMinute
     *
     * @param int or float wordsNumber
     * @return int seconds or minutes
     */
     const getReadingTime = wordsNumber => {

        let output = 0;

        const words = wordsForMinute;
        const seconds = 60;
        const timeForSingleWord = seconds / words;
        output = timeForSingleWord * wordsNumber;


        return formatSeconds(output);
    }

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">{title}</h4>
            <p className="words-counter__output-num">{getReadingTime(content)}</p>
        </div>
    )

}

export default TimeOutput;
