import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <Link className='rrr' to='/'><h1>React Blog App</h1></Link> 
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create"> New Blog</Link>
            </div> 
        </nav>
    );
}
 
export default Navbar;