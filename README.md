# Dad Joke App

## We are going to build a simple command line tool which allows us to make a request to an API and store the data in a text file! We will be using the following modules:

`fs` - for reading and writing to a file

`process` - for gathering arguments from the command line

`request` - for making API requests (this is an external module)

## This application should accept a command line argument using process.argv. The command line argument should be a search term and your application should make an API request to the [dad joke API](https://icanhazdadjoke.com/api) to search for a joke based on the search term. If it finds jokes matching the term, it should output a random joke, and should also save the joke to a file called jokes.txt. If it doesn't find a joke, it should log a message to the console telling the user that no jokes were found for that search term.
