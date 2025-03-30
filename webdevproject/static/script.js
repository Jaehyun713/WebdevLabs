// Image lightbox
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
// Image lightbox

function validate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const validationMessage = document.getElementById("validationMessage")
    if ((!name.checkValidity()) || (!email.checkValidity()) || (!comment.checkValidity)){
        validationMessage.innerHTML = "Please fill this field";
    }
}

function zipValidate(){
    const zipCode = document.getElementById("zip")
    const validationMessage = document.getElementById("validationMessage")
    if (!zipCode.checkValidity()){
        validationMessage.innerHTML = "Invalid. Must be 5 digits"
    }
}

function phoneValidate(){
    const phoneNumber = document.getElementById("Phone Number")
    const validationMessage = document.getElementById("validationMessage")
    if (!phoneNumber.checkValidity()){
        validationMessage.innerHTML = "Invalid. Must be 5 digits"
    }
} 

$("#readMore").click(function(){
    $("#history").show();
    $("#readLess").show();
    $("#readMore").hide();
});

$("#readLess").click(function(){
    $("#history").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

function getWeather(){
    fetch("https://openweathermap.org/api")
    .then(response=>response.json())
    .then(data => {
        let weatherText = data.forecast.forecastday[0].day.condition.text; // Gets today's weather condition
        document.getElementById("weather").innerText = `Weather: ${weatherText}`;    })
    .catch(error => {
    // If something goes wrong (like no internet), log the error in the console
    console.error("Error fetching weather:", error);
    // Display a user-friendly error message on the webpage
    document.getElementById("weather").innerText = "Oops! Something went wrong. Try again.";
    });
}
    
