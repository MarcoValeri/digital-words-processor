// Import scss file
import './base-output.scss';


const BaseOutput = ({baseTitle, baseOutput}) => {

    return (
        <div className="words-counter__output">
            <h4 className="words-counter__output-title">{baseTitle}</h4>
            <p className="words-counter__output-num">{baseOutput}</p>
        </div>
    )

}

export default BaseOutput;
