import { useState } from 'react';

// Import components
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';

// Import style file
import './rich-text-editor.scss';

const RichTextEditor = () => {

    // Set Hooks
    const [content, setContent] = useState('');

    // Event
    const handleContent = event => {
        event.preventDefault();
        setContent(event.target.value);
        console.log(content.length);
    }

    return (
        <div>
            <Navigation />
            <div className="rich-text-editor">
                <div className="rich-text-editor__textarea-container">
                    <textarea className="rich-text-editor__textarea" onKeyUp={handleContent}></textarea>
                </div>
                <div className="rich-text-editor__output-container">
                    { content }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RichTextEditor;
