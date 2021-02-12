import React from 'react';

const Hero = (props) => {
    return (
        <section className="hero">
            <nav>
                <h4>Welcome</h4>
                <button onClick={props.handleLogout}>Logout</button>

            </nav>
        </section>
    )
}

export default Hero;     