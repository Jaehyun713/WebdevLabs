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
    slideIndex += n;
    showSlides(slideIndex);
    console.log("Current Slide Index:", slideIndex);
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
    // Lines 40-47 copied from chatgpt for errors
    if (slideIndex - 1 >= 0 && slideIndex - 1 < slides.length) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (slideIndex - 1 >= 0 && slideIndex - 1 < dots.length) {
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
    console.log("Slide Index:", slideIndex);
    console.log("Active Thumbnail:", dots[slideIndex-1]);
  }
// Image lightbox

// Code copied from Chatgpt
$(document).ready(function(){
    $(".prev, .next").css({
        "position": "absolute",
        "top": "50%",
        "transform": "translateY(-50%)"
    });
})

$("#Idv").click(function(){
    $("#IdvFares").slideToggle();
});

$("#group").click(function(){
    $("#GroupFares").slideToggle();
});

function validate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const zipCode = document.getElementById("zip");
    const phoneNumber = document.getElementById("phone")
    let valid = true;
    const validationMessage1 = document.getElementById("validationMessage1")
    const validationMessage2 = document.getElementById("validationMessage2")
    const validationMessage3 = document.getElementById("validationMessage3")
    const validationMessage4 = document.getElementById("validationMessage4")
    validationMessage1.innerText = "";
    validationMessage2.innerText = "";
    validationMessage3.innerText = "";
    validationMessage4.innerText = "";

    if ((!name.checkValidity())){
        validationMessage1.innerText += "Please fill out this field";
        valid = false;
    }
    if ((!email.checkValidity())){
        validationMessage2.innerText += "Please fill out this field";
    }
    if(!zipCode.checkValidity()){
        validationMessage3.innerText += "Invalid. Must be 5 digits";
        valid = false;
    }
    if (!phoneNumber.checkValidity()){
        validationMessage4.innerText = "Invalid. Must be 10 digits";
        valid = false;
    }
    return valid;
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
function goBack() {
    window.history.back();
}
// function getWeather(){
//     fetch("https://openweathermap.org/api")
//     .then(response=>response.json())
//     .then(data => {
//         let weatherText = data.forecast.forecastday[0].day.condition.text; // Gets today's weather condition
//         document.getElementById("weather").innerText = `Weather: ${weatherText}`;    })
//     .catch(error => {
//     // If something goes wrong (like no internet), log the error in the console
//     console.error("Error fetching weather:", error);
//     // Display a user-friendly error message on the webpage
//     document.getElementById("weather").innerText = "Oops! Something went wrong. Try again.";
//     });
// }
    
