
let project1_images=["images/project2g.png", "images/project2e.png", "images/project2f.png" ]
let project2_images=["images/project3f.png", "images/project3d.png","images/project3e.png"]

let project1_index = 0
let project2_index = 0


function plusProject1_index(n){
  if (this.id="project1"){
    console.log("hi");
  showNextImg(project1_index += n);
  }

  else if (this.id="project2") {
    console.log("hi2");
    showNextImg(project2_index += n);
  }
}

// SHOWS IMAGES ON THE POP-UP SCREEN FOR EACH PROJECT.
function showNextImg(n){
  console.log("THE PROJECT INDEX IS: " + projectIndex)
  if (projectIndex%2==0){
    var project1 = document.getElementById("proj_zombie")

    if (n%3==0){
      project1.src = project1_images[0]
      document.getElementById("project_description").innerHTML = "A puzzle game for Android devices.<br>Supports landscape orientation only."
    }
    else if (n%2==1) {
      project1.src = project1_images[1]
      document.getElementById("project_description").innerHTML = "Find all the zombies hidden in the grid with as few clicks as possible!<br>Clicking on a cell either reveals a zombie or a count of zombies in the cell's row and colum."
    }
    else{
      project1.src = project1_images[2]
      document.getElementById("project_description").innerHTML = "Set the grid configuration and the total number of hidden zombies!"
    }
  }

  else if (projectIndex%2==1) {
    console.log(projectIndex);
    var project2 = document.getElementById("proj_zombie");
    project2.style.width = "270px";
    project2.style.height ="430px";

    if (n%3==0){
      console.log(projectIndex)
      project2.src = project2_images[0]
      document.getElementById("project_description").innerHTML = "The Depth of Field Calculator calculates optimal distances for taking sharp pictures. Choose from existing lenses or lenses that you have previously added."
    }
    else if (n%2==1) {
      project2.src = project2_images[1]
      document.getElementById("project_description").innerHTML = "Add a lens to your list of lenses by entering lens information."
    }
    else{
      project2.src = project2_images[2]
      document.getElementById("project_description").innerHTML = "The DoF calculator auto-calculates near and far focal distances, depth of field, and hyperfocal distance of your lens upon receiving inputs."
    }



  }
}

function showPopUp(n){
  if (n==0){
  document.getElementById("pop-up").style.opacity = 1;
  document.getElementById("project1").style.opacity = 0;
  }

  else if (n==1){
    var firstImg = document.getElementById("proj_zombie");
    var description = document.getElementById("project_description");
    document.getElementById("pop-up").style.opacity = 1;
    description.innerHTML = "A lens calculator";
    firstImg.src = "images/project3f.png";
    firstImg.style.width = "270px";
    firstImg.style.height = "430px";
    firstImg.style.position = "absolute";

    description.style.width = "100px";


  }



  document.getElementById("pop-up").style.zIndex = "10000";
}

function closePopUp(){
  document.getElementById("pop-up").style.opacity = 0;
  document.getElementById("project1").style.opacity = 1;
  document.getElementById("pop-up").style.zIndex = "0";
}

var projectIndex = 0;

// SHOW EACH PROJET ON THE WEBSITE
function showProject(n){
  console.log("HAHAHAHA");
  if (n%2==0){
    document.getElementById("project-title").innerHTML="Zombie Exterminator";
  }
  else if (n%2==1) {
    document.getElementById("project-title").innerHTML="Lens Calculator";
  }

  else{
      document.getElementById("project-title").innerHTML="Bubble Pop";
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
