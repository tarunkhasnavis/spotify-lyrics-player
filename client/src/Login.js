import React from 'react';
import { Container } from 'react-bootstrap';

// Authentication URL with necessary query parameters from spotify API docs
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=bc43d635979c4b9e8e108dcf47ecc4e0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


function Login() {
    return (
        // Use bootstrat container type 
        <Container className = "d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login with Spotify
            </a>
        </Container>
    )
}

export default Login
