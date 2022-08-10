import { Link } from 'react-router-dom'
// import '../styles/App.css'

export function Navbar() {
    return (
        <navbar>        
            <div className="Logged">
                <Link to='/myevents'>My Events</Link>
                <Link to='/createevents'>Create Events</Link>
                <Link to='/logout'>LogOut</Link>
            </div>

            <div className="Guest">
                <Link to='/register'>Register</Link>
                <Link to='/login'>LogIn</Link>
            </div>

        </navbar>
    );
}