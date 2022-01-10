//Javascript for NOI Form
'use strict';

//Do work after DOM as loaded
document.addEventListener("DOMContentLoaded", function(event) { 
  //console.log("Javascript loaded");

  document.getElementById("waiverEligbility").classList.add("active");

  const navButton = document.getElementsByClassName('btn-action');
  const formSections = document.querySelectorAll(".form-section");
  const inputs = document.getElementsByTagName('input');
  let answersValue;
  let progressItem;
  let formSection;
  let showAlert = document.querySelector(".usa-alert");

    //For the number of form sections - look for the one in active status
    for (var i = 0; i < formSections.length; i++) {
      if (formSections[i].classList.contains("active")) {

        //const answers = document.getElementsByTagName('fieldset');
        const radioButtons = document.getElementsByClassName('usa-radio__input');
        
        //console.log("How Many Radio Buttons?", radioButtons.length);
        let nextButton = document.querySelector('btn-next');
        //console.log("Next Button", nextButton);

        let formSectionID = document.getElementById(formSections[i].id);
        let formSectionID2 = formSections[i].id;
        //console.log("Total Answers", formSectionID.getElementsByTagName('fieldset').length);
        answersValue = formSectionID.getElementsByTagName('fieldset').length;

        let progressItemID = "section-" + formSectionID2;
        //console.log(progressItemID);
        progressItem = document.getElementById(progressItemID);
        progressItem.classList.add("in-progress");
        let progressIcon = progressItem.querySelector(".usa-icon");
        progressIcon.insertAdjacentHTML('beforeend', '<use xlink:href="/assets/img/sprite.svg#navigate_next"></use>');
        
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('click', function(){
          //console.log("You clicked an input label.");
          if (showAlert.classList.contains("show")){
            showAlert.classList.remove("show");
          }

          let radiosChecked = document.querySelectorAll('input[type="radio"]:checked').length;
          let checkboxesChecked = document.querySelectorAll('input[type="checkboxes"]:checked').length;
          let totalInputsChecked = radiosChecked + checkboxesChecked;

            //console.log("Total Inputs Checked", totalInputsChecked);
            if (answersValue <= totalInputsChecked){
              //console.log("Checked inputs matches number of fieldsets for", formSectionID2);
              progressItem.classList.remove("in-progress");
              progressItem.classList.add("complete");
              progressIcon = progressItem.querySelector(".usa-icon");
              progressIcon.innerHTML = '<use xlink:href="/assets/img/sprite.svg#check"></use>';
            }
          })
        }
        

      for(var i = 0; i < navButton.length; i++){
      //console.log(navButton.getAttribute("value"));
        navButton[i].addEventListener('click', function(e){
          e.preventDefault();
                if ((document.querySelector('input[type="radio"]:checked') == null)) {
                    
                    //console.log(showAlert);
                    showAlert.classList.add("show");
                } else {

                  formSections.forEach(element => element.classList.remove("active"));
                  //console.log("This is for the button value", formSectionID);
                  //console.log("The Next Section is", this.getAttribute("value"));
                  let nextSection = this.getAttribute("value");

                  formSection = document.getElementById(nextSection);
                  formSection.classList.add("active");
                  progressItemID = "section-" + nextSection;
                  //console.log(progressItemID);
                  progressItem = document.getElementById(progressItemID);
                  progressItem.classList.add("in-progress");
                  progressIcon = progressItem.querySelector(".usa-icon");
                  progressIcon.innerHTML = '<use xlink:href="/assets/img/sprite.svg#navigate_next"></use>';
                }
          })
        }  //End NavButton For Loop 
      } //End if form section is active
    }
});
