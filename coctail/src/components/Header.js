import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <>           
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>MyCoctail</Navbar.Brand>
                    <Link to="/">Home</Link>
                    <Link to="/favs">fav</Link>
                </Navbar>
            </>
        )
    }
}

export default Header;