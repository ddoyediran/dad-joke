const request = require("request"); // module to make request
const fs = require("fs"); // module to work with file system
const prompt = require("prompt"); // module to accept input from user as a prompt

const command_text = process.argv; // accept text from users

// let promptText;

function call() {
  prompt.start();

  prompt.get(["terms"], function (err, result) {
    if (err) {
      throw err;
    }
    // console.log(result["terms"]);
    // promptText = result.terms;
    // console.log(promptText);
    request(
      {
        url: `https://icanhazdadjoke.com/search?term=${result.terms}`,
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
              return;
            }
            if (output.results.length > 0) {
              console.log(output.results[0].joke);
              return;
            }

            if (output.results.length == null) {
              console.log(
                `This joke about ${results.terms} appears ${output.total_jokes}`
              );
              return;
            }
          });
        }
      }
    );
  });
}

call();

// request joke from the endpoint
// request(
//   {
//     url: `https://icanhazdadjoke.com/search?term=${promptText}`,
//     headers: {
//       Accept: "application/json",
//     },
//   },
//   async function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       const output = await JSON.parse(body);
//       // console.log(output.results[0].joke);

//       // console.log(JSON.parse(body));

//       // write to file
//       fs.writeFile("jokes.txt", output.results[0].joke, function (err) {
//         if (err) {
//           console.log("no jokes were found for that search term");
//         }
//         console.log(output.results[0].joke);
//       });
//     }
//   }
// );
