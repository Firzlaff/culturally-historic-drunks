
$(document).ready(function () {
 
    $('#search-button').on("click", function (event) {
      event.preventDefault();
      console.log("clicked", location);
        location.href = location.origin + location.pathname + "#searchLink"
      var searchValue = $("#search-value").val();
     // console.log(searchValue)
  
      searchDrink(searchValue);
      getJoke();
      getGiphy();
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

     $("#drink-image").html(drinkImage);
     
     

    
     
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
            //set the text to the Random Joke HTML Node
            randomJoke.text(response.joke);
           
        })
}

getJoke()
//HTML target node for Giphy url
let randomGiphy = $("#randomGiphy");

function getGiphy(){
// query URL to giphy for a Random, PG-13, Drinking, Giphy
    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=TVoFgNLmftMMHxc2WTQxG3ofywTNoKhE&tag=drinking&rating=PG-13";
//Ajax call for Giphy to pull the above random giphy for app
  $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(giphy) {
    // variable for the URL returned from the Giphy Call
    let url = giphy.data.images.original.url;
    // set the attribute for SRC for the targeted HTML node on the Img
    randomGiphy.attr("src", url);
});
}
getGiphy()
 
});


