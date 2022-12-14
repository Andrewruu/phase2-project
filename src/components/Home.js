import React from "react";

function Home({isLoggedIn}) {
    return (
        <section id="home">
            <h1>
                Welcome, Save Your Novels Here!
            </h1>
            <h3>This will be your personal library of novels you read.</h3>
            <p>Use Add Novel to add new novels to expand your library</p>
            <p>Use the Novel link to look at your novels</p>
            <p>This is also where you can edit the number of chapter you are on or remove novels from your library</p>
            
        </section>
    );
}

export default Home;