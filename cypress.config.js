const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    

    //conectando projeto ao dashboard do cypress:
    projectId: "3n78ah",

     
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});