import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PersonFill } from 'react-bootstrap-icons'
import { BoxArrowInRight } from 'react-bootstrap-icons'
import React, { useState, useEffect } from 'react';
// redux
import { useSelector } from 'react-redux'

export const Navigation = () => {
    const [isAuth, setIsAuth] = useState(false);
    const token = useSelector(state => state.token);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);
    return (
        <div>
            <Navbar className='navbar navbar-expand navbar-dark bg-dark' style={{ paddingLeft: "20px" }}>

                <Navbar.Brand href="/">App Store</Navbar.Brand>
                <Nav className="me-auto">
                    {isAuth ? <Nav.Link href="/">Home</Nav.Link> : null}
                </Nav>
                <Nav>
                    {isAuth ?
                        <Nav.Link href="/logout" style={{ display: 'flex' }}>
                            <div style={{ color: 'white', marginTop: '5px', marginRight: '10px' }}>{localStorage.getItem('username')}to({token})</div>
                            <BoxArrowInRight size={35} />
                        </Nav.Link> :
                        <Nav.Link href="/login">
                            <PersonFill size={35} />
                        </Nav.Link>
                    }
                </Nav>
            </Navbar>
        </div>
    );
}