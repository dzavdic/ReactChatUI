const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === "hi") resolve("Welcome to chatbot!");
        else if (message === "Dzekii") resolve(`I recognize you: ${message}`);
        else resolve("I don't recognize you: " + message);
      }, 1000);
    });
  }
};

export default API;
