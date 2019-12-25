const config = require('../config.json');
module.exports = {
  title: "Astrofest '19",
  description: 'Just playing around',
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};
