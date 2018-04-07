var action = process.argv[2];
var value = process.argv[3]; 



// says which api to use
switch (action) {
    case 'my-tweets':
        twitter();
        break;

    case 'movie-this':
        imdb();
        break;

    case 'do-what-it-says':
        dwis();
        break;
}



//TWITTER________________________________________________________

function twitter() {
    var twitter = require('Twitter');
    var fs = require('fs');
    var dataKeys = require('./keys.js');
    //console.log(twitterKey) 

    //twitter

    var client = new twitter (dataKeys.twitterKeys);

    var tweetslength;
    var params = {
        screen_name: 'Amy schill',
        count: 20   
        }

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            console.log("=============================================");
            console.log("Here are the most recent tweets");

            var data=[];

            for (var i = 0; i < tweets.length; i++) {
                data.push({
                    'Tweeted on: ' : tweets[i].created_at,
                    'Tweet:  ' : tweets[i].text
                });

                console.log("_____________________________________________");
                console.log(data);

            }
        }
    });
};





//SPOTIFY________________________________________________________







//IMDB________________________________________________________

function imdb() {

    var request = require('request-promise');
    var value = process.argv[3];

    if (value == null)  {
        let movie = "Mr. Nobody";
        request('http://www.omdbapi.com/?t=' + movie + '&r=json&tomatoes=true&apikey=trilogy')
        .then(response =>{
            let data = JSON.parse(response);
            console.log("======================================================================");
            console.log("If you haven't watched Mr. Nobody,then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
            console.log("");
            console.log("======================================================================");
            console.log("The movie's name is: " + data.Title);
            console.log("");
            console.log("The movie was released in: " + data.Year);
            console.log("");
            console.log("The movie's rating is: " + data.imdbRating);
            console.log("");
            console.log("This movie was produced in the: " + data.Country);
            console.log("");
            console.log("The language for this movie is in: " + data.Language);
            console.log("");
            console.log("The movie's plot: " + data.Plot);
            console.log("");
            console.log("The movie's actors are: " + data.Actors);
            console.log("");
            console.log("The Rotten Tomato rating is: " + data.tomatoRating);  //for some reason, this doesn't seem to work???
            console.log("");
            
        }) } 
    else {
        request('http://www.omdbapi.com/?t=' + value + '&r=json&tomatoes=true&apikey=trilogy')
        .then(response =>{
            let data = JSON.parse(response);
            console.log("I found your movie!");
            console.log("======================================================================");
            console.log("The movie's name is: " + data.Title);
            console.log("");
            console.log("The movie was released in: " + data.Year);
            console.log("");
            console.log("The movie's rating is: " + data.imdbRating);
            console.log("");
            console.log("This movie was produced in the: " + data.Country);
            console.log("");
            console.log("The language for this movie is in: " + data.Language);
            console.log("");
            console.log("The movie's plot: " + data.Plot);
            console.log("");
            console.log("The movie's actors are: " + data.Actors);
            console.log("");
            console.log("The Rotten Tomato rating is: " + data.tomatoRating);  //for some reason, this doesn't seem to work???
            console.log("");
                
            })
        }
    };


//do-what-it-says________________________________________________

