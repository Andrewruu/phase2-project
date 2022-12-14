import React from "react";

function Home({isLoggedIn}) {
    return (
        <section id="home">
            <h1>
                Welcome, Save Your Novels Here!
            </h1>
            <h3>This will be your personal library of novels you read.</h3>
            <p>Use the Novel link to look at your novels</p>
            <p>Use Add Novel to add new novels</p>
        </section>
    );
}

export default Home;