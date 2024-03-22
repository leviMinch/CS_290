import { Link } from 'react-router-dom';


function Navigation(){
    return (
        <nav className = "Nav-Bar">
          <Link to="/" className='link-button'>Home</Link>
          <Link to="/add-exercise" className='link-button'>Add</Link>
        </nav>
    );
}

export default Navigation;

