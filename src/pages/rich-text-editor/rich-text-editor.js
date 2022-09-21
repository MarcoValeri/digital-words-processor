import { useState } from 'react';
import { FaLink } from 'react-icons/fa';

// Import components
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';

// Import style file
import './rich-text-editor.scss';

const RichTextEditor = () => {

    /**
     * Create a function that get
     * @param string getContent
     * and
     * @return array that contains
     * content wrapped into html
     * paragraph tag
     */
    const contentWithHtmlTags = getContent => {

        const contentArr = [];

        for (let i = 0; i < getContent.length; i++) {

            contentArr[0] = `<p>`;

            if (getContent[i] === `\n`) {
                contentArr.push(`</p><p>`);
            } else {
                contentArr.push(getContent[i]);
            }

        }

        // Close the paragraph at the end
        contentArr.push(`<p>`);

        return contentArr;

    }

    // Set Hooks
    const [content, setContent] = useState('');

    // Events
    const handleLink = (event) => {
        event.preventDefault();
        console.log(`Link fired`);
    }

    const handleSelect = event => {
        const selectedContent = event.target.value.substring(event.target.selectionStart, event.target.value.selectionEnd);
        console.log(selectedContent);
    }

    const handleContent = event => {
        event.preventDefault();
        setContent(event.target.value);
        console.log(content.length);
    }

    return (
        <div>
            <Navigation />
            <div className="rich-text-editor">
                <div className="rich-text-editor__menu-container">
                    <FaLink className="rich-text-editor__menu-icon rich-text-editor__menu-link-icon" onClick={handleLink}></FaLink>
                </div>
                <div className="rich-text-editor__textarea-container">
                    <textarea className="rich-text-editor__textarea" onKeyUp={handleContent} onSelect={handleSelect}></textarea>
                </div>
                <div className="rich-text-editor__output-container">
                    { contentWithHtmlTags(content) }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RichTextEditor;
