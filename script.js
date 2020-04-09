console.log("testing that script is loaded");





//HTML node for random joke
let randomJoke = $("#randomJoke");

function getJoke(){

    // Performing our AJAX GET request call to icanhazdadjoke
    $.ajax({
        url: "https://icanhazdadjoke.com/",
        headers: {Accept: "application/json"},
        method: "GET"
        }).then(function(response) {
            //set the text to the Random Joke text
            randomJoke.text(response.joke);
           
        })

}

getJoke()



let randomGiphy = $("#randomGiphy");

function getGiphy(){
// query URL with search parmiters of 1 random pg13 drinking giphy 
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fHopE6OTtcSDNcxudBz842qXlNhvPEvz&q=drinking&limit=1&offset=0&rating=PG-13&lang=en";
//Ajax call for Giphyy to pull the above 1 random giphy for app
  $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(giphy) {
    // variable for the URL
    let url = giphy.data[0].embed_url;
    console.log(url);
    // set the SRC for img for the randomGiphy id to the URL for the random Giphy
    randomGiphy.attr("src", url);

 // randomGiphy.text(giphy.data[0].embed_url);

});

}
getGiphy()