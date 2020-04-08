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


function hide() {
    document.getElementsByClassName("bg").style.display = "none";
  }
