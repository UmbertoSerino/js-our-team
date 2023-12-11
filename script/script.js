
dreamTeam = [
    {firstName : "Gianluigi", lastName: "Buffon", position : "Goalkeeper", picture : "https://www.soccertoday.com/wp-content/uploads/2017/10/Buffon2.jpg"},

    {firstName : "Roberto Carlos", lastName: "da Silva", position : "Defender", picture : "https://images.daznservices.com/di/library/DAZN_News/e3/80/roberto-carlos-brasile_18t7aijwq9hjk16gsftu4vzn7j.jpg?t=1810039887"},

    {firstName : "Fabio", lastName: "Cannavaro", position : "Defender", picture : "https://cannavarofabio.files.wordpress.com/2018/09/11cdd706590eb3b2d542ff8d309d8fac.jpg"},

    {firstName : "Paolo", lastName: "Maldini", position : "Defender", picture : "https://img.dailymail.co.uk/i/pix/2007/05_02/paoloDM2105_468x530.jpg"},

    {firstName : "Gianluca", lastName: "Zambrotta", position : "Defender", picture : "https://www.gianlucazambrotta.it/wp-content/uploads/2021/05/nazionale_04-1-e1626338836791.jpg"},

    {firstName : "Patrick", lastName: "Vieira", position : "Midfielder", picture : "https://www.arsenalpics.com/p/5/patrick-vieira-arsenal-361247.jpg.webp"},

    {firstName : "Steven", lastName: "Gerrard", position : "Midfielder", picture : "https://s.rfi.fr/media/display/8c401590-14b0-11ea-9877-005056a99247/w:1280/p:1x1/2015-05-02T160044Z_73584044_MT1ACI13720360_RTRMADP_3_FOOTBALL.JPG"},

    {firstName : "Zinedine", lastName: "Zidane", position : "Midfielder", picture : "https://www.realmadrid.com/img/horizontal_620px/9_zidane-gol-2-foto-buena_20210426060019.jpg"},

    {firstName : "David", lastName: "Beckham", position : "Midfielder", picture : "https://cdn.britannica.com/21/92821-050-7CFB7CC2/David-Beckham-2005.jpg"},

    {firstName : "LuisNazarioDeLima", lastName: "Ronaldo", position : "Forward", picture : "https://i.pinimg.com/564x/94/50/01/9450017bd55bb83b881f059dee137c79.jpg"},

    {firstName : "Gabiel_Omar", lastName: "Batistuta", position : "Forward", picture : "https://asromaasik.files.wordpress.com/2011/12/batistutta2.jpg"}
];

console.log('ci sono: ' + dreamTeam.length + " giocatori");
console.log("il mio giocatore più forte è: " + dreamTeam[9].firstName);
console.log("ruolo: " + dreamTeam[9].position);


const cardPlayer = document.querySelector("section.player-profile");

for (let index = 0; index < dreamTeam.length; index++) {
    const myTeam = dreamTeam[index];

    const playerCard = document.createElement("article");
    playerCard.classList.add("player-card");

    playerCard.innerHTML = 
    `
        <div>
            <img src="${myTeam.picture}" alt="${myTeam.firstName} picture">
        </div>
        <div>
            <p>
             Nome: ${myTeam.firstName} Cognome: ${myTeam.lastName}
            </p>
            <p>
              Ruolo: ${myTeam.position}
            </p>
        </div>
    `;

    cardPlayer.appendChild(playerCard);


    if (myTeam.position === "Goalkeeper") {
        playerCard.classList.add("section-goalkeeper");

    } else if (myTeam.position === "Defender") {
        playerCard.classList.add("horizontal-section-defender");

    } else if (myTeam.position === "Midfielder") {
        playerCard.classList.add("horizontal-section-midfielder");
        
    } else if (myTeam.position === "Forward") {
        playerCard.classList.add("section-forward");
    }
}
