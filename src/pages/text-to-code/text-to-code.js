// Import components
import TextToCodeProcessor from '../../components/text-to-code-processor/text-to-code-processor';
import Title from '../../components/title/title';

// Import style file
import './text-to-code.scss';

const TextToCode = () => {
    return (
        <div>
            <Title />
            <TextToCodeProcessor />
        </div>
    )
}

export default TextToCode;