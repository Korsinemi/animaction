const dance = require("../gifs/dance.json");
const wag = require("../gifs/wag.json");

const animaction = () => {
  return {
    dance: () => dance[mathRandom(anime.length)],
    wag: () => wag[mathRandom(wag.length)],
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = animaction();