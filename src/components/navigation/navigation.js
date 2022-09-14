import { Link } from 'react-router-dom';

// Import components
import Title from '../title/title';

// Import style file
import './navigation.scss';


const Navigation = () => {
    return (
        <nav className="nav">
            <Title />
            <ul className="nav__menu">
                <li className="nav__menu-item">
                    <Link className='link body-2' to='/'>Word Counter</Link>
                </li>
                <li className="nav__menu-item">
                    <Link className='link body-2' to='/rich-text-editor'>Rich Text Editor</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation;
