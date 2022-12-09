import React from "react";
import { Redirect } from "react-router";

function Home({isLoggedIn}) {
    if (!isLoggedIn) return <Redirect to="/login" />;
    return (
        <section id="home">
            <h1>
                Search and Save Your Novels
            </h1>
        </section>
    );
}

export default Home;