
//Search cocktail by name
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

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
      //var city = $("<div>");
      //console.log(response.drinks[0].strInstructions);
      //console.log(response.drinks[1].strInstructions);
      //console.log(response.drinks[0].strIngredient5);
    

      // if (response.drinks[0].strIngredient10 === null ) {
      //     console.log("nope")
      
      //var strMeasure = (response);
      //var strIngredient = (reponse);
      
      var drinkName = $(".drink-name").text(response.drinks[0].strDrink);

      $("#name").append(drinkName);

      $(".drink-instructions").text(response.drinks[0].strInstructions);
      $(".recipe").text(response.drinks[0].strIngredient1);
      $(".recipe1").text(response.drinks[0].strIngredient2);
      $(".recipe2").text(response.drinks[0].strIngredient3); 
      $(".recipe3").text(response.drinks[0].strIngredient4);
      $(".recipe4").text(response.drinks[0].strIngredient5);
      $(".recipe5").text(response.drinks[0].strIngredient6);
     
      $(".measure").text(response.drinks[0].strMeasure1);
      $(".measure1").text(response.drinks[0].strMeasure2);
      $(".measure2").text(response.drinks[0].strMeasure3); 
      $(".measure3").text(response.drinks[0].strMeasure4);
     
     
     var drinkImage = $("<img>").attr("src", response.drinks[0].strDrinkThumb);

     $("#drink-image").append(drinkImage);
     
     


     //$("#recipe").



     //$(".recipe").text(response.drinks[3].strMeasure1);

      // 
      
      
      // };
    
        // if(drinks.includes(ingString)) {
        //   ingArray.push(???)
        // }
     
        function testString(str) {

        };
        // drink.forEach(function(){
        //   .includes(ingString)

         });
        

    //});

   // if(strIngredient === strMesasure) {
      //         alert("yeah");
      //      }else if (strIngredient != strMeasure)
      //          alert("No");  
      
    
    //  var drinks = (response.drinks[""].strInstructions.strIngredient.strMeasure);     
    // for (i = 0; i < drinks.length; i++) {
    //   if(strIngredient === strMesasure) {
    //       alert("yeah");
    //   }else if (strIngredient != strMeasure)
    //       alert("No");
   
   
  //   };

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
  
  
  
});


