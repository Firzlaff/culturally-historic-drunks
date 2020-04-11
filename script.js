
$(document).ready(function () {
 
    $('#search-button').on("click", function (event) {
      event.preventDefault();
      console.log("clicked");
      var searchValue = $("#search-value").val();
      console.log(searchValue)
  
      searchDrink(searchValue);
    });

  function searchDrink(searchValue) {
    $.ajax({
      type: "GET",
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`,
      dataType: "json",
    }).then(function (response) {
      console.log(response)
    
            
      var drinkName = $(".drink-name").text(response.drinks[0].strDrink);
      //Drink name
      $("#name").append(drinkName);
      //Adds mixing instructions
      $(".drink-instructions").text(response.drinks[0].strInstructions);
      //Adds drink ingredients
      $(".recipe").text(response.drinks[0].strIngredient1);
      $(".recipe1").text(response.drinks[0].strIngredient2);
      $(".recipe2").text(response.drinks[0].strIngredient3); 
      $(".recipe3").text(response.drinks[0].strIngredient4);
      $(".recipe4").text(response.drinks[0].strIngredient5);
      $(".recipe5").text(response.drinks[0].strIngredient6);
     
      //Adds drink measurements
      $(".measure").text(response.drinks[0].strMeasure1);
      $(".measure1").text(response.drinks[0].strMeasure2);
      $(".measure2").text(response.drinks[0].strMeasure3); 
      $(".measure3").text(response.drinks[0].strMeasure4);
      $(".measure4").text(response.drinks[0].strMeasure5);
      $(".measure5").text(response.drinks[0].strMeasure6);
     
     
     
     //Adds drink image
      var drinkImage = $("<img>").attr("src", response.drinks[0].strDrinkThumb);

     $("#drink-image").append(drinkImage);
     
     

    
     
        function testString(str) {

        };

         });
        

   
 };

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
//HTML target node for Giphy url
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
   // randomGiphy.attr("src", url);

 // randomGiphy.text(giphy.data[0].embed_url);

});

}
getGiphy()
 
});


