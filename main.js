/*
 * Handles the initial executions on body load and sets up core events and animations
 */

import { SetupSafetyTips } from "/scripts/safety-tips.js";
import { GetExercises } from "/scripts/guides.js";
import { targetViewport, exerciseGuideDisplay } from "/scripts/shared.js";

//Animejs timeline for periodic looped button shake
var timedButtonShake = anime.timeline(
    {
        easing: 'linear',
        loop: true,
        duration: 10000
    });
//Add scene to timeline for button shaking that defines the button shake
timedButtonShake.add({
    targets: '.promotional-btn',
    duration: 700,
    keyframes: [
        { rotate: "10deg" },
        { rotate: "-10deg" },
        { rotate: "10deg" },
        { rotate: "-10deg" },
        { rotate: "10deg" },
        { rotate: "-10deg" },
        { rotate: "10deg" },
        { rotate: "-10deg" },
        { rotate: "0deg" }
    ],
});
//Add empty scene to timeline to add gap between button shakes
timedButtonShake.add({
    targets: '.promotional-btn',
});

//Flag that denotes whether or not the hamburger menu is opened or closed
var isMenuClosed = true;

//Stores a number denoting a previous viewport width
var pastSize = window.innerWidth;

//The hamburger menu button
const sideMenuIconBtn = document.querySelector('#side-menu-icon-btn');
//The side navigation button container
const sideNavBtns = document.querySelector('#side-nav-btn-container');

//Attach event to setup javascript when DOM loads
document.addEventListener("DOMContentLoaded", InitialSetup());

//Resize event for changing active guide UI
window.addEventListener('resize', () => {
    //If the current window width is greater than or equal to the big viewport target, and an active guide exists
    if (window.innerWidth >= targetViewport.big && exerciseGuideDisplay.isActiveGuide === true) {
        //Hide the active guide popup
        exerciseGuideDisplay.activeGuidePopup.hide();
        //If the past size is less than the big viewport target
        if (pastSize < targetViewport.big) {
            //Set the past size to the current viewport width
            pastSize = window.innerWidth;
            //Move the active guide content elements to the large viewport active guide container
            let topContainer = document.querySelector('.selected-exercise-top');
            let botContainer = document.querySelector('.selected-exercise-bot');
            let header = exerciseGuideDisplay.activeGuidePopup.querySelector('h2');
            if (header != null)
                exerciseGuideDisplay.activeGuide.appendChild(header);
            exerciseGuideDisplay.activeGuide.appendChild(topContainer);
            exerciseGuideDisplay.activeGuide.appendChild(botContainer);
        }

    }

    //If the current window width is less than or equal to the small viewport target, and an active guide exists
    else if (window.innerWidth <= targetViewport.small && exerciseGuideDisplay.isActiveGuide === true) {
        //Show the active guide popup
        exerciseGuideDisplay.activeGuidePopup.show();
        //If the past size is greater than the small viewport target
        if (pastSize > targetViewport.small) {
            //Set the past size to the current viewport width
            pastSize = window.innerWidth;
            //Move the active guide content elements to the small viewport active guide container
            let topContainer = document.querySelector('.selected-exercise-top');
            let botContainer = document.querySelector('.selected-exercise-bot');
            //Stops null nodes from being appended if the guide is still loading
            if (topContainer != null || botContainer != null && exerciseGuideDisplay.activeGuide.firstChild) {
                exerciseGuideDisplay.activeGuidePopup.appendChild(exerciseGuideDisplay.activeGuide.firstChild);
                exerciseGuideDisplay.activeGuidePopup.appendChild(topContainer);
                exerciseGuideDisplay.activeGuidePopup.appendChild(botContainer);
            }
        }
    }

});

//Initial setup when page body loads
function InitialSetup() {
    SetupNavEvents();
    SetupSafetyTips();
    GetExercises();
}

//Adds events to nav buttons that scroll to related section on click
function SetupNavEvents() {
    //Setup navigation button events for scrolling to sections
    const buttons = document.querySelectorAll('.nav-btn, .side-nav-btn, #top-logo, #side-nav-top-logo, #guides-promotion-btn');
    for (let btn of buttons) {
        btn.addEventListener("click", (event) => {
            //Close side menu if it is opened
            if (sideNavBtns.style.display != "none" && btn.id != "side-nav-top-logo") {
                ToggleSideMenu();
            }
            ScrollToSection(event.currentTarget.dataset.moveTo);
        });
    }

    sideMenuIconBtn.addEventListener("click", () => ToggleSideMenu());
}

//Open or close the side menu
function ToggleSideMenu() {

    let sideMenu = document.querySelector('#side-nav-btn-container ul');

    //Play the reverse animation for side menu button dropdown
    if (isMenuClosed) {

        if (sideMenu.classList.contains('hide-menu-animation'))
            sideMenu.classList.remove('hide-menu-animation');

        sideMenu.classList.add('show-menu-animation');

    }
    //Play the normal animation for side menu button dropdown
    else {
        sideMenu.classList.remove('show-menu-animation');
        sideMenu.classList.add('hide-menu-animation');
    }

    //Animejs timeline animation for morphing the hamburger SVG button to the cross button
    var morphSideMenu = anime.timeline(
        {
            duration: 70,
            easing: "easeInOutQuad",
            autoplay: true,
            direction: 'normal',
            loop: false
        }
    );
    //Morphs the top line
    morphSideMenu.add({
        targets: "#top-line",
        fill: 'none',
        x2: "72",
        //Set to 50 if closed, else 0
        y1: isMenuClosed ? "50" : "0",
        transform: "translate(72 50)",
        stroke: "#0c2d48",
        strokeLinecap: "round",
        strokeWidth: "10",
    });
    //Morphs the middle line
    morphSideMenu.add({
        targets: "#mid-line",
        fill: 'none',
        //Hide it if the menu is closed, else show
        strokeWidth: isMenuClosed ? "0" : "10",
    });
    //Morphs the bottom line
    morphSideMenu.add({
        targets: "#bot-line",
        fill: 'none',
        x2: "72",
        //Set to 50 if closed, else 0
        y2: isMenuClosed ? "50" : "0",
        //Set translateY to 50 if closed, else 100
        transform: isMenuClosed ? "translate(72 50)" : "translate(72 100)",
        stroke: "#0c2d48",
        strokeLinecap: "round",
        strokeWidth: "10",
    });

    //Toggle isMenuClosed
    isMenuClosed = !isMenuClosed;

}

//Scrolls to a section of the website
function ScrollToSection(moveTo) {
    if (moveTo == 'home' || moveTo == 'about')
        window.scrollTo(0, 0);
    else
        document.getElementById(moveTo).scrollIntoView(true);
}