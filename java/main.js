
let project1_images=["images/project2g.png", "images/project2e.png", "images/project2f.png", ]

let project1_index = 0

function plusProject1_index(n){
  showNextImg(project1_index += n);
}

function showNextImg(n){
  if (projectIndex%2==0){
    var project1 = document.getElementsByClassName("proj_zombie")[0]

    if (n%3==0){
      project1.src = project1_images[0]
    }
    else if (n%2==1) {
      project1.src = project1_images[1]
    }
    else{
      project1.src = project1_images[2]
    }
  }

  // else if (projectIndex%2==1) {
  //   document.getElementById("project_title").innerHTML="Bubble Pop";
  // }
}


function plusProject(n){
  showProject(projectIndex += n);
  console.log(projectIndex);
}

function showPopUp(){
  document.getElementById("pop-up").style.opacity = 1;
  document.getElementById("project1").style.opacity = 0;
  document.getElementById("pop-up").style.zIndex = "10000";
}

function closePopUp(){
  document.getElementById("pop-up").style.opacity = 0;
  document.getElementById("project1").style.opacity = 1;
  document.getElementById("pop-up").style.zIndex = "0";
}

var projectIndex = 0;

function showProject(n){
  console.log("HAHAHAHA");
  if (n%2==0){
    document.getElementById("project_title").innerHTML="Zombie Exterminator";
  }
  else if (n%2==1) {
    document.getElementById("project_title").innerHTML="Bubble Pop";
  }

  else{
      document.getElementById("project_title").innerHTML="Bubble Pop";
  }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showProject(projectIndex += n);

}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


let status1=false;
let status2=false;
let status3=false;
let status4=false;
let status5=false;

let hobby1= document.querySelector("#piano-desc");
let hobby2= document.querySelector("#paint-desc");
let hobby3= document.querySelector("#spanish-desc");
let hobby4= document.querySelector("#psychology-desc");
let hobby5= document.querySelector("#game-desc");

let toggleVis1 = function(){

  hobby1.style.opacity = 1;
  hobby2.style.opacity = 0;
  hobby3.style.opacity = 0;
  hobby4.style.opacity = 0;
  hobby5.style.opacity = 0;
  console.log("hihi");

}
