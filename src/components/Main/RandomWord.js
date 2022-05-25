const words = {
  animals: [
    "butterfly",
    "goose",
    "alpaca",
    "hummingbird",
    "eagle",
    "panda",
    "parrot",
    "llama",
    "chicken",
    "elephant",
    "reindeer",
    "rabbit",
    "squirrel",
    "caterpillar",
    "octopus",
    "giraffe",
    "seahorse",
    "seagull",
    "turtle",
    "kangaroo",
  ],

  colors: [
    "white",
    "black",
    "red",
    "blue",
    "green",
    "magenta",
    "orange",
    "purple",
    "pink",
    "yellow",
    "turquoise",
    "brown",
    "maroon",
    "gray",
    "vermilion",
    "cyan",
    "crimson",
    "violet",
    "burgundy",
    "indigo",
  ],

  countries: [
    "denmark",
    "thailand",
    "china",
    "singapore",
    "malaysia",
    "sweden",
    "russia",
    "argentina",
    "canada",
    "south-korea",
    "japan",
    "indonesia",
    "australia",
    "philippines",
    "israel",
    "ukraine",
    "brazil",
    "egypt",
    "india",
    "brunei",
  ],

  artists: [
    "taylor-swift",
    "eminem",
    "drake",
    "post-malone",
    "the-weekend",
    "billie-eilish",
    "justin-bieber",
    "selena-gomez",
    "ed-sheeran",
    "bruno-mars",
    "ariana-grande",
    "michael-jackson",
    "adele",
    "dua-lipa",
    "doja-cat",
    "harry-styles",
    "rihanna",
    "lady-gaga",
    "katy-perry",
    "olivia-rodrigo",
  ],

  "car brands": [
    "toyota",
    "honda",
    "chevrolet",
    "ford",
    "mercedes-benz",
    "bmw",
    "porsche",
    "subaru",
    "nissan",
    "maserati",
    "volkswagen",
    "audi",
    "ferrari",
    "volvo",
    "jaguar",
    "bentley",
    "hyundai",
    "mazda",
    "tesla",
    "mitsubishi",
  ],
};

const categories = ["animals", "colors", "countries", "artists", "car brands"];

const category = categories[Math.floor(Math.random() * categories.length)];

const word =
  words[category][Math.floor(Math.random() * words[category].length)];

const indexes = [];
for (let i = 0; i < Math.round(word.length / 3); i++) {
  indexes.push(Math.floor(Math.random() * categories.length));
}

let randomIndexes = [...new Set(indexes)];

export { category, word, randomIndexes };
