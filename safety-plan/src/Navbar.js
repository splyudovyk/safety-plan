import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Safety Plan</h1>
            <div className="links">
                <Link to="/safety-plan/">Create Your Safety Plan</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;