var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=75098,us&units=imperial&appid=" + APIKey;


$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
    var city = response.city.name;
          $("#reportTitle").text("Weather Report For the City of "+city + " TX");
  });
