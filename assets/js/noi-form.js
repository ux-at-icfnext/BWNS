//Javascript for NOI Form

//Do work after DOM as loaded
document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("DOM loaded");

  document.getElementById("waiverEligbility").classList.add("active");
  const navButton = document.getElementsByClassName('btn-action');
  const formSections = document.querySelectorAll(".form-section");

  for(i=0, len=navButton.length; i<len; i++){
    //console.log(navButton.getAttribute("value"));
    //if (navButton["value"] === null) {
    //  console.log("Value is null");
    //}
    let formSection;
    navButton[i].addEventListener('click', function(e){
      e.preventDefault();
      formSections.forEach(element => element.classList.remove("active"));
      btnValue = this.getAttribute("value");
      //console.log("Button Value" + " " + btnValue);
      formSection = document.getElementById(btnValue);
      formSection.classList.add("active");
    }, false);
  }


  //newSection = navButtonValue;
  //console.log("The new section to go to is:" + newSection);
});
