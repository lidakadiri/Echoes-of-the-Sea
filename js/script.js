/*******************************
 * rune page 
 *******************************/
function showRune(rune) {
  const runeBox = document.getElementById("runeBox");
  let content = "";

  switch (rune) {
    case "rune1":
      content = "<h2>ᚠ (Fehu)</h2><p>Symbol of tides, the flow of life and memory. The sea gives, the sea takes, and through its rhythm the truth is revealed.</p>";
      break;
    case "rune2":
      content = "<h2>ᚱ (Raidho)</h2><p>The journey across seas and between realms. To follow its path is to step where past and future converge.</p>";
      break;
    case "rune3":
      content = "<h2>ᚨ (Ansuz)</h2><p>The voice, the whisper, the message carried in the waves. It speaks not only from this world, but others unseen.</p>";
      break;
    case "rune4":
      content = "<h2>ᛉ (Algiz)</h2><p>Protection, the guardian of secrets. To call upon this rune is to stand between danger and salvation.</p>";
      break;
    case "rune5":
      content = "<h2>ᛟ (Othala)</h2><p>Home, the lost world beneath the sea. Though buried and broken, its echo lives within the deep.</p>";
      break;
    case "rune6":
      content = "<h2>ᚷ (Gebo)</h2><p>The gift, the bond between two worlds. To hold it is to bear both the blessing and burden of unity.</p>";
      break;
    default:
      content = "<p>Select a rune to reveal its meaning.</p>";
  }

  runeBox.innerHTML = content;
}


/*******************************
 * timeline page yoke
 *******************************/
function showTimeline(event) {
  const contentBox = document.getElementById("timelineContent");
  let content = "";

  switch (event) {
    case 1:
      content = "<h2>Long Ago – The Age of the Deep Ones</h2><p>Before human memory, an ancient oceanic civilization flourished beneath the waves. Their cities glimmered with coral spires and pearl-lit chambers, thriving in harmony with the great Abyssal Guardian. But pride turned to ruin. A rift between realms was opened, and the civilization vanished, leaving only whispers in the tide.</p>";
      break;
    case 2:
      content = "<h2>Centuries Past – The Shattering of the Isles</h2><p>Legends tell of storms that split the islands apart, swallowing villages whole. Survivors spoke of ghostly voices calling from the sea, warning of the dangers hidden below. Fishermen carved runes into stone to protect their people, while storytellers passed down fragmented myths of “the lost song beneath the waves.”</p>";
      break;
    case 3:
      content = "<h2>100 Years Ago – The Last Sighting</h2><p>An explorer claimed to glimpse a great silhouette moving in the depths — too vast to be a whale, too graceful to be a leviathan. His journals described strange patterns of light beneath the water, as if a city still pulsed in the abyss. He vanished on his final dive, and his notes were dismissed as madness.</p>";
      break;
    case 4:
      content = "<h2>30 Years Ago – The Silence Grows</h2><p>Elders recall a change in the sea. The fish grew scarcer, storms harsher, and the whispers fainter, as though the ocean itself was holding its breath. On the island, families abandoned their homes, leaving only ruins and unanswered questions. Few dared to stay.</p>";
      break;
    case 5:
      content = "<h2>Present Day – Isla’s Arrival</h2><p>Dr. Isla Maren, a young marine biologist, comes to the remote island to study unusual wave patterns. But instead of data, she discovers something far stranger: calling her name. </p>";
      break;
    default:
      content = "<p>Select a point on the timeline to reveal its story.</p>";
  }

  // update and reveal content box
  contentBox.innerHTML = content;
  contentBox.style.display = "block";
}



/*******************************
 * trailer countdown
 *******************************/
function trailerCountdown() {
  const countdownElement = document.getElementById("countdownTrailer");
  if (!countdownElement) return; // only run if on trailer.html

  const releaseDate = new Date("January 31, 2026 00:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "The trailer has been released! Now available on Youtube!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Trailer Release In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}


/*******************************
 * streamig countdown
 *******************************/
function streamingCountdown() {
  const countdownElement = document.getElementById("countdownStream");
  if (!countdownElement) return; // only run if on stream.html

  const releaseDate = new Date("May 22, 2026 17:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "Now available for streaming on Netflix!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Streaming Available In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}


/*******************************
 * initialises so it runs on load
 *******************************/
document.addEventListener("DOMContentLoaded", function () {
  trailerCountdown();
  streamingCountdown();
});


/*******************************
 *  cast icon selection 
 *******************************/
function showCharacter(character) {
  const characterBox = document.getElementById("characterBox");
  let content = "";

  switch (character) {
    case "isla":
      content = `
        <div class="character-card">
          <img src="assets/Isla.jpg" alt="Isla">
          <h2>Dr. Isla Maren</h2>
          <h3>(portrayed by Jessica Quinn)</h3>
          <p>A gifted young marine biologist searching for truth beneath the waves. 
          Empathetic yet driven, she becomes the bridge between two worlds.
</p>
        </div>
      `;
      break;

    case "adrian":
      content = `
        <div class="character-card">
          <img src="assets/Victor.png" alt="Adrian">
          <h2>Adrian Kael</h2>
          <h3>(portrayed by Victor Alaric)</h3>
          <p>A wealthy industrialist funding Isla’s research. 
          His ambition to harness the artifact’s power threatens to unravel
          both worlds..</p>
        </div>
      `;
      break;

    case "guardian":
      content = `
        <div class="character-card">
          <img src="assets/Claire.png" alt="Guardian">
          <h2>The Guardian</h2>
          <h3>(portrayed by Claire Redmond)</h3>
          <p>An ancient being bound to the ocean depths, feared 
          as a monster but revealed as a tragic protector of secrets.
</p>
        </div>
      `;
      break;

    case "noah":
      content = `
        <div class="character-card">
          <img src="assets/Mateo.png" alt="Noah">
          <h2>Noah Reyes</h2>
          <h3>(portrayed by Mateo Calderón)</h3>
          <p>A local fisherman and a fellow researcher who has lived with the ocean’s mysteries all his life. 
          As Isla's closet ally he helps her through her journey.</p>
        </div>
      `;
      break;

    case "elder":
      content = `
        <div class="character-card">
          <img src="assets/Fionnuala.png" alt="Elder">
          <h2>Maura O’Sullivan</h2>
          <h3>(portrayed by Fionnuala Byrne)</h3>
          <p>Keeper of the island’s stories and traditions. She knows more of the truth 
          than she is willing to admits. Will she help guides Isla toward her destiny.</p>
        </div>
      `;
      break;

    case "eryndor":
      content = `
        <div class="character-card">
          <img src="assets/Eryndor.jpg" alt="Eryndor">
          <h2>Eryndor</h2>
          <h3>(portrayed by Marcus Lang)</h3>
          <p>A figure from the lost civilization beneath the waves, 
          whose story intertwines fate, sacrifice, and the survival of his people.</p>
        </div>
      `;
      break;

    default:
      content = `<p>Select a character to learn more about them.</p>`;
  }

  characterBox.innerHTML = content;
}
/*******************************
 *  pick a rune any rune 
 *******************************/
function showRune(rune) {
  const runeBox = document.getElementById("runeBox");
  let content = "";

  switch (rune) {
    case "tides":
      content = `
        <div class="rune-card">
          <img src="assets/rune1.png" alt="Rune of Tides">
          <h3>Rune of Tides</h3>
          <p>This rune symbolizes the eternal ebb and flow of the sea. It guides those who respect balance and warns those who disrupt it.</p>
        </div>
      `;
      break;

    case "depths":
      content = `
        <div class="rune-card">
          <img src="assets/rune2.png" alt="Rune of Depths">
          <h3>Rune of Depths</h3>
          <p>A symbol of mystery and hidden wisdom. It whispers of secrets buried in the ocean’s heart, waiting for the worthy.</p>
        </div>
      `;
      break;

    case "storms":
      content = `
        <div class="rune-card">
          <img src="assets/rune3.png" alt="Rune of Storms">
          <h3>Rune of Storms</h3>
          <p>Carved during tempests, this rune embodies chaos and renewal. It is a sign of great trials and the strength to overcome them.</p>
        </div>
      `;
      break;

    case "echoes":
      content = `
        <div class="rune-card">
          <img src="assets/rune4.png" alt="Rune of Echoes">
          <h3>Rune of Echoes</h3>
          <p>This rune carries the voices of those lost to the sea. It connects the present with echoes of the past, a bridge between worlds.</p>
        </div>
      `;
      break;

    case "guardians":
      content = `
        <div class="rune-card">
          <img src="assets/rune5.png" alt="Rune of Guardians">
          <h3>Rune of Guardians</h3>
          <p>Worn by protectors of the deep, this rune signifies loyalty and sacrifice. It binds its bearer to the sea’s eternal duty.</p>
        </div>
      `;
      break;
    
      case "luminescence":
          content = `
        <div class="rune-card">
          <img class="runeIconImage" src="assets/rune6.png" alt="Rune of Luminescence">
          <h3>Rune of Luminescence</h3>
          <p>This rune embodies the guiding light within the ocean’s darkness. It illuminates paths hidden to the unseeing and inspires clarity in times of uncertainty.</p>
        </div>
  `;
  break;


    default:
      content = "<p>Select a rune to reveal its meaning.</p>";
  }

  runeBox.innerHTML = content;
}

