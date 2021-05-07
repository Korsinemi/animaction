/* Creado por KitsuneCode, la copia sera denunciada u.u */
// GIFS -w-
const dance = require("../functions/gifs/dance.json");
const wag = require("../functions/gifs/wag.json");
const sip = require("../functions/gifs/sip.json")
// TEXTO .w.
const answers = require("../functions/text/answers.json");
// IMAGENES owo
const anime = require("../functions/images/anime.json")

const animaction = () => {
  return {
    // GIFS -w-
    dance: () => dance[mathRandom(dance.length)],
    wag: () => wag[mathRandom(wag.length)],
    sip: () => sip[mathRandom(sip.length)],
    // TEXTO .w.
    answers: () => answers[mathRandom(answers.length)],
    // IMAGENES owo
    anime: () => anime[mathRandom(anime.length)],
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = animaction();