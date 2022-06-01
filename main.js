const request = require("request"); // module to make request
const fs = require("fs"); // module to work with file system

const command_text = process.argv; // accept input from users

// console.log(command_text[0]);

// console.log(typeof command_text[0]);

// request joke from the endpoint

request(
  {
    url: `https://icanhazdadjoke.com/search?term=hipster`,
    headers: {
      Accept: "application/json",
    },
  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const output = JSON.parse(body);
      // console.log(output.results[0].joke);

      // console.log(JSON.parse(body));

      // write to file
      fs.writeFile("jokes.txt", output.results[0].joke, function (err) {
        if (err) {
          console.log("no jokes were found for that search term");
        }
        console.log(output.results[0].joke);
      });
    }
  }
);
