/* Creado por KitsuneCode, la copia sera denunciada u.u */
// GIFS -w-
const dance = require("../functions/gifs/dance.json");
const wag = require("../functions/gifs/wag.json");
// TEXTO .w.
const answers = require("../functions/text/answers.json");
// IMAGENES owo
const anime = require("../functions/images/anime.json")

const animaction = () => {
  return {
    // GIFS -w-
    dance: () => dance[mathRandom(anime.length)],
    wag: () => wag[mathRandom(wag.length)],
    // TEXTO .w.
    answers: () => answers[mathRandom(answers.length)],
    // IMAGENES owo
    anime: () => anime[mathRandom(anime.length)],
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = animaction();