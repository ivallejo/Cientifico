const Character = () => {
    const view = `
        <div class="chareacter-inner">
            <articule class="character-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </articule>
            <articule class="character-card">
                <h3>Episodios:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Gender:</h3>
                <h3>Origen:</h3>
                <h3>Last Location:</h3>
            </articule>
        </div>
    `;
    return view;
};

export default Character;