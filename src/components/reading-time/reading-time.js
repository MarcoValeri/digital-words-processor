const ReadingTime = props => {

    /**
     * Create a function that gets
     * @param int getTime
     * and
     * @return string formatted time
     * 
     * less than 60 return seconds
     * greater than 60 returns minutes
     * greater 3600 returns hours
     */
    const formatTime = getTime => {

        let output = 0;

        // Round the time
        const rountTheTime = Math.round(getTime);

        if (rountTheTime === 1) {
            output = `${rountTheTime} second`;
        } else if (rountTheTime < 60 && rountTheTime !== 1) {
            output = `${rountTheTime} seconds`
        } else if (rountTheTime === 60) {
            output = `1 minute`;
        } else if (rountTheTime > 60) {
            const getMinutes = Math.floor(rountTheTime / 60);
            const getSeconds = rountTheTime - (getMinutes * 60);
            const roundSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;
            output = `${getMinutes}:${roundSeconds} minutes`;
        }

        return output;

    }

    /**
     * Create a function that determines
     * the Reading Time following this rule:
     * 1 minute for 200 words
     * 
     * @param int or float wordsNumber
     * @return int seconds or minutes
     */
    const getReadingTime = wordsNumber => {

        let output = 0;

        const words = 200;
        const seconds = 60;
        const timeForSingleWord = seconds / words;
        output = timeForSingleWord * wordsNumber;


        return formatTime(output);
        // return output;
    }

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">Reading Time</h4>
            <p className="words-counter__output-num">{getReadingTime(props.words)}</p>
        </div>
    )
}

export default ReadingTime;