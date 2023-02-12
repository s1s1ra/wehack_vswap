import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {Profile, Events, User} from './';
import { Grid } from '@mui/material';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
const Home = () =>{
    const [activeNav, setActiveNav] = useState(0);
    return(
        <>
            <Navbar style={{backgroundColor:'#78A2CC'}}>
                <Container style={{textDecorationColor:'#fff'}}>
                <Nav style={{fontSize : '20px'}}>
                <Navbar.Brand  style={{fontSize : '40px',paddingInline:10}}href="/"><SwapCallsIcon style={{fontSize:60}} />WeSwap</Navbar.Brand>
                
                    <Nav.Link active_nav onClick={() =>setActiveNav(0)}>Profiles</Nav.Link>
                    
                    <Nav.Link onClick={() =>setActiveNav(1)}>Events</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() =>setActiveNav(2)}>User Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/home">Your events</NavDropdown.Item>
                    <NavDropdown.Item href="/home">Your groups</NavDropdown.Item>
                    <NavDropdown.Item href="/home">Setings</NavDropdown.Item>
                    <NavDropdown.Item href="/home">Help</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Container>
            </Navbar> 
            <Grid container spacing={2}>
                <Grid item xs={0}>

                </Grid>
                <Grid item xs={12}>
                {activeNav === 0 && <Profile />}
                {activeNav === 1 && <Events />}
                {activeNav === 2 && <User />}
                </Grid>
                
            </Grid>
        </>
    )
}

export default Home