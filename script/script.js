// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// ? Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// ? Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// !Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
//! Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!
// Consigli del giorno:
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
dreamTeam = [
    {name : "Gianluigi-Buffon", position : "Goalkeeper", picture : "https://www.figc.it/media/116784/gettyimages-544240200.jpg?v=11278254"},

    {name : "Roberto-Carlos", position : "Defender", picture : "https://images.daznservices.com/di/library/DAZN_News/e3/80/roberto-carlos-brasile_18t7aijwq9hjk16gsftu4vzn7j.jpg?t=1810039887"},

    {name : "Fabio-Cannavaro", position : "Defender", picture : "https://cannavarofabio.files.wordpress.com/2018/09/11cdd706590eb3b2d542ff8d309d8fac.jpg"},

    {name : "Paolo-Maldini", position : "Defender", picture : "https://img.dailymail.co.uk/i/pix/2007/05_02/paoloDM2105_468x530.jpg"},

    {name : "Gianluca-Zambrotta", position : "Defender", picture : "https://www.gianlucazambrotta.it/wp-content/uploads/2021/05/nazionale_04-1-e1626338836791.jpg"},

    {name : "Patrick-Vieira", position : "Midfielder", picture : "https://www.arsenalpics.com/p/5/patrick-vieira-arsenal-361247.jpg.webp"},

    {name : "Steven-Gerrard", position : "Midfielder", picture : "https://s.rfi.fr/media/display/8c401590-14b0-11ea-9877-005056a99247/w:1280/p:1x1/2015-05-02T160044Z_73584044_MT1ACI13720360_RTRMADP_3_FOOTBALL.JPG"},

    {name : "Zinedine-Zidane", position : "Midfielder", picture : "https://www.realmadrid.com/img/horizontal_620px/9_zidane-gol-2-foto-buena_20210426060019.jpg"},

    {name : "David-Beckham", position : "Midfielder", picture : "https://cdn.britannica.com/21/92821-050-7CFB7CC2/David-Beckham-2005.jpg"},

    {name : "LuisNazarioDeLima-Ronaldo", position : "Forward", picture : "https://90l.tribuna.com/images/4d/76/c3/4d76c35fd0d74f398169df86156678351200x630.jpg"},

    {name : "Andrij-Shevchenko", position : "Forward", picture : "https://asromaasik.files.wordpress.com/2011/12/batistutta2.jpg"}
];

console.log('ci sono: ' + dreamTeam.length + " giocatori");
console.log("il mio giocatore più forte è: " + dreamTeam[9].name);
console.log("ruolo: " + dreamTeam[9].position);

// ! Building For

const cardPlayer = document.querySelector("section.player-profile");

for (let index = 0; index < dreamTeam.length; index++) {
    const myTeam = dreamTeam[index];

    const playerCard = document.createElement("article");
    playerCard.classList.add("player-card")


    playerCard.innerHTML = 
    `
        <div>
            <img src="${myTeam.picture}" alt="${myTeam} + "picture"">
        </div>
        <div>
            <p>
             nome: ${myTeam.name}
            </p>
            <p>
              ruolo: ${myTeam.position}
            </p>
        </div>
    `;

    cardPlayer.appendChild(playerCard);
}