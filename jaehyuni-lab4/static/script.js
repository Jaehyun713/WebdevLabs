var x, y;
x = 5;
y = 7;
z = x + y
console.log(z)

var A, B;
A = "Hello ";
B = 'world!';
C = A + B
console.log(C)

function SumNPrint(x1,x2) {
    let sum = x1 + x2
    x3 = sum
    console.log(x3)
}
SumNPrint(x,y);
SumNPrint(A,B);

if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

var L1, L2;
L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];
function findTheBanana(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'Banana'){
            alert("Banana at " + i + " index")
        }
    }
}
// findTheBanana(L1);
// findTheBanana(L2);

function findTheBanana(arr){
    arr.forEach(function(element, index) {
        if (element == 'Banana'){
            alert("Banana at " + index + " index")
        }
    })
}

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc(){
    const d = new Date();
    var h = d.getHours();
    if (h < 12){
        greeting = "Good morning"
    }
    else if (h >= 12 && h < 18) {
        greeting = "Good afternoon"
    }
    else if (h >= 18 && h < 20) {
        greeting = "Good evening"
    }
    else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greeting = "Good night";
    }
    (document.getElementById("greeting").innerHTML = greeting 
    + ", my name is Jaehyun")
}
// window.onload = greetingFunc;
if (window.location.href.includes("index.html")) {
    greetingFunc();
} //from chatgpt generated lines 71-74 for step 11.

function addYear(){
    const year = new Date()
    const y = year.getFullYear();
    document.getElementById("copyYear").innerHTML += y
}

function showList(){
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMore").style.display = "None";
}

function validate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    const validationMessage = document.getElementById("validationMessage")
    if ((!name.checkValidity()) || (!email.checkValidity()) || (!comment.checkValidity)){
        validationMessage.innerHTML = "Please fill this field";
    }
}

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});


