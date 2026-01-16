const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://sauce-demo.myshopify.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      return config
    },
  },
});




// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:8080", // opsional, sesuaikan
//     setupNodeEvents(on, config) {
//       // event listener jika diperlukan
//       return config;
//     }
//   }
// });
