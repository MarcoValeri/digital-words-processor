// Import style file
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container-content">
                <p className="body-3">Made with <span className="footer__heart">&hearts;</span> in London by <a className="no-link no-link--white" href="https://www.devmarco.com/" target="_blank" rel="noreferrer noopener">Marco Valeri</a></p>
            </div>
        </footer>
    )
}

export default Footer;
