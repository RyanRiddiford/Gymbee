/*
 * Contains functions and variables responsible for the active guide functionality
 */

import { CreateAttributePair, attributeHeaders, RemoveAllChildren, exerciseGuideDisplay, PerformLoadAnimation, data, targetViewport, CreateTabButton } from "/scripts/shared.js";

//Render the selected exercise guide
export async function LoadExerciseGuide(guideIndex) {

    //Assign selected guide to local variable
    let guide = data.filteredGuides[guideIndex];
    //Number of tabs in the active guide's tab group
    const numTabs = 2;
    //Titles for active guide tabs
    const titles = ["Step by Step Guide", "Tips and Warnings"];

    //Create the active guide header
    let activeGuideHeader = RenderSelectedExerciseHeader(guide.name);
    //Create top content container
    let topContainer = document.createElement('div');
    topContainer.classList.add("selected-exercise-top");
    //Create the bottom content container as a shoelace tab group component
    let botContainer = document.createElement('sl-tab-group');
    botContainer.classList.add("selected-exercise-bot");

    //Empty child elements of the active guide containers for both viewports
    RemoveAllChildren([exerciseGuideDisplay.activeGuidePopup, exerciseGuideDisplay.activeGuide]);

    //Empty expanded modal visual
    let expandedVisualModal = document.getElementById('expanded-visual-demo-popup');
    if (expandedVisualModal.querySelector('.selected-exercise-visual') != null)
        expandedVisualModal.removeChild(expandedVisualModal.querySelector('.selected-exercise-visual'));

    //Perform loading animation
    await PerformLoadAnimation([exerciseGuideDisplay.activeGuide, exerciseGuideDisplay.activeGuidePopup], "Loading Guide", true, "active-guide-prog-bar");

    //Empty child elements of the active guide containers for both viewports
    RemoveAllChildren([exerciseGuideDisplay.activeGuidePopup, exerciseGuideDisplay.activeGuide]);

    //Create each remaining part of the guide view
    topContainer.appendChild(RenderAttributes(guide));
    topContainer.appendChild(RenderVisualDemo(guide));

    //Create and append each shoelace tab for the bottom content
    for (let i = 0; i < numTabs; i++)
        botContainer.appendChild(CreateTabButton(titles[i], "nav", "active-guide-tab"));

    //Append the tab panels to the bottom content container
    botContainer.appendChild(RenderSteps(guide));
    botContainer.appendChild(RenderTipsAndWarnings(guide));

    //Attach the active guide content to the current viewport's active guide container
    AttachActiveGuideContent(activeGuideHeader, topContainer, botContainer);

    //Set the numVisuals attribute of the active guide content container for both viewports
    exerciseGuideDisplay.activeGuide.numVisuals = guide.numVisuals;
    exerciseGuideDisplay.activeGuidePopup.numVisuals = guide.numVisuals;

    //When overlay clicked, deselect selected exercise
    exerciseGuideDisplay.activeGuidePopup.addEventListener('sl-request-close', event => {
        //If the CSS part of the dialog clicked was the overlay
        if (event.detail.source === 'overlay') {
            //End the active guide render
            EndActiveGuide();
        }
    });

    //Append the close button for the active guide dialog
    exerciseGuideDisplay.activeGuidePopup.appendChild(CreatePopupCloseButton());

    //Set flag indicating a guide is active
    exerciseGuideDisplay.isActiveGuide = true;

}

//Attaches active guide content to the active guide content container
function AttachActiveGuideContent(header, topContainer, botContainer) {
    //If the window's width is greater than or equal to the target width for larger viewports
    if (window.innerWidth >= targetViewport.big) {
        //Add active guide content to the active guide split screen
        exerciseGuideDisplay.activeGuide.appendChild(header);
        exerciseGuideDisplay.activeGuide.appendChild(topContainer);
        exerciseGuideDisplay.activeGuide.appendChild(botContainer);
    }
    //If the window's width is less than or equal to the target width for smaller viewports
    else if (window.innerWidth <= targetViewport.small) {
        //Add active guide content to the active guide popup
        exerciseGuideDisplay.activeGuidePopup.appendChild(header);
        exerciseGuideDisplay.activeGuidePopup.appendChild(topContainer);
        exerciseGuideDisplay.activeGuidePopup.appendChild(botContainer);
    }

}

//Sets the state of the active guide to off
function EndActiveGuide() {
    //Empty both active guide containers
    RemoveAllChildren([exerciseGuideDisplay.activeGuidePopup, exerciseGuideDisplay.activeGuide]);
    //Set flag that indicates an active guide to false
    exerciseGuideDisplay.isActiveGuide = false;
    //Read the prompt for selecting an exercise guide
    let header = document.createElement('h2');
    header.innerHTML = "Select An Exercise Guide";
    exerciseGuideDisplay.activeGuide.appendChild(header);
    //Deselect exercise listing
    let selectedListing = document.querySelector('.exercise-listing-active');
    if (selectedListing != null)
        selectedListing.classList.remove('exercise-listing-active');
}

//Creates and returns a shoelace button for closing the active guide dialog
function CreatePopupCloseButton() {
    //Create and append a close dialog button for active guide popup
    let closeBtn = document.createElement('sl-button');
    closeBtn.slot = 'footer';
    closeBtn.variant = 'primary';
    closeBtn.innerHTML = 'CLOSE';
    closeBtn.classList.add("guide-popup-close-btn");
    //When the close button is clicked, close the active guide popup
    closeBtn.addEventListener("click", () => {
        //Hide/close the active guide popup
        exerciseGuideDisplay.activeGuidePopup.hide();
        //End the active guide render
        EndActiveGuide();
    });

    return closeBtn;

}

//Render the selected exercise heading
function RenderSelectedExerciseHeader(name) {
    let header = document.createElement('h2');
    header.classList.add('selected-exercise-header');
    header.innerHTML = name;
    return header;
}

//Render the selected exercise attribute list
function RenderAttributes(guide) {

    //Create the attribute container
    let attContainer = document.createElement('div');
    attContainer.classList.add("attribute-list");

    //Create and append the attribute section header
    let header = document.createElement('h3');
    header.innerHTML = "Attributes";
    attContainer.appendChild(header);

    //Style and append attribute headers and values to the attribute container
    for (let attHeader of attributeHeaders)
        attContainer.appendChild(CreateAttributePair(attHeader, guide, "active-guide-attribute"));

    return attContainer;
}

//Render the selected exercise visual demonstration
function RenderVisualDemo(guide) {

    //Contains image slider and controls
    let sliderContainer = document.createElement('div');
    sliderContainer.classList.add('exercise-slider');

    //Displays the active exercise image
    let visualEl = document.createElement('div');
    visualEl.classList.add("selected-exercise-visual");

    //Assign the first exercise image
    visualEl.style.backgroundImage = 'url(' + guide.visualSrc + ')';

    //Set the current visual counter
    visualEl.currVisual = 1;

    //Get the visual demo popup dialog element
    let expandedVisualModal = document.getElementById('expanded-visual-demo-popup');

    //When the active guide visual is clicked on
    visualEl.addEventListener("click", () => {
        //Show the active guide visual expanded in the modal
        expandedVisualModal.show();
    });

    //If more than one images exist for the active guide, create and append the slider controls
    if (guide.numVisuals > 1) {
        //Contains the slider controls
        let sliderControlContainer = document.createElement('div');
        sliderControlContainer.classList.add('slider-control-container');

        //Create the slider controls
        let prevBtn = document.createElement('button');
        prevBtn.classList.add("left-control");
        let nextBtn = document.createElement('button');
        nextBtn.classList.add("right-control");
        //Set slider control text
        prevBtn.innerHTML = "PREVIOUS";
        nextBtn.innerHTML = "NEXT";

        //Change to next image on click
        nextBtn.addEventListener("click", () => {

            let expandedVisualModal = document.getElementById('expanded-visual-demo-popup');
            let visualEl = document.querySelector('.selected-exercise-visual');
            //If this is not the last image to display, display the next one
            if (Number.parseInt(exerciseGuideDisplay.activeGuide.numVisuals) > Number.parseInt(visualEl.currVisual)) {
                let nextVisual = Number.parseInt(visualEl.currVisual);
                nextVisual++;
                visualEl.style.backgroundImage = visualEl.style.backgroundImage.replace(visualEl.currVisual, nextVisual);
                visualEl.currVisual = nextVisual;
            }
            //If this is the last image, and more than one image exists, display the first one
            else if (Number.parseInt(exerciseGuideDisplay.activeGuide.numVisuals) == Number.parseInt(visualEl.currVisual) && exerciseGuideDisplay.activeGuide.numVisuals > 1) {
                visualEl.style.backgroundImage = visualEl.style.backgroundImage.replace(visualEl.currVisual, 1);
                visualEl.currVisual = 1;
            }
            //Replace the expanded visual modal image with a deep clone of the new image
            let visualClone = visualEl.cloneNode(true);
            visualClone.classList.add('expanded-visual');
            visualClone.style.transform = 'scale(2)';
            expandedVisualModal.replaceChild(visualClone, expandedVisualModal.querySelector('.selected-exercise-visual'));

        });

        //Change to previous image on click
        prevBtn.addEventListener("click", () => {
            let expandedVisualModal = document.getElementById('expanded-visual-demo-popup');
            let visualEl = document.querySelector('.selected-exercise-visual');
            //If this is not the first image to display, and more than one image exists, display the previous one
            if (Number.parseInt(visualEl.currVisual) > 1) {
                let nextVisual = Number.parseInt(visualEl.currVisual);
                nextVisual--;
                visualEl.style.backgroundImage = visualEl.style.backgroundImage.replace(visualEl.currVisual, nextVisual);
                visualEl.currVisual = nextVisual;
            }
            //If this is the first image, and more than one image exists, display the last one
            else if (Number.parseInt(visualEl.currVisual) == 1 && exerciseGuideDisplay.activeGuide.numVisuals > 1) {
                let nextVisual = Number.parseInt(exerciseGuideDisplay.activeGuide.numVisuals);
                visualEl.style.backgroundImage = visualEl.style.backgroundImage.replace(visualEl.currVisual, nextVisual);
                visualEl.currVisual = nextVisual;
            }
            //Replace the expanded visual modal image with a deep clone of the new image
            let visualClone = visualEl.cloneNode(true);
            visualClone.classList.add('expanded-visual');
            visualClone.style.transform = 'scale(2)';
            expandedVisualModal.replaceChild(visualClone, expandedVisualModal.querySelector('.selected-exercise-visual'));

        });

        //Append arrows to container
        sliderControlContainer.appendChild(prevBtn);
        sliderControlContainer.appendChild(nextBtn);

        //Append the slider controls container to the slider container
        sliderContainer.appendChild(sliderControlContainer);

    }

    //Prepend image display and arrows to slider container
    sliderContainer.prepend(visualEl);

    //Add a deep clone of the exercise's first image to the expanded visual modal
    let visualClone = visualEl.cloneNode(true);
    visualClone.classList.add('expanded-visual');
    visualClone.style.transform = 'scale(2)';

    //Remove existing expanded visuals
    let existingExpandedVisual = document.querySelectorAll('.expanded-visual');
    for (let item of existingExpandedVisual)
        expandedVisualModal.removeChild(item);

    expandedVisualModal.appendChild(visualClone);

    return sliderContainer;

}

//Render the selected exercise steps
function RenderSteps(guide) {

    let title = "Step by Step Guide";

    //Create the steps container as an ordered list element
    let stepsContainer = document.createElement('ol');
    stepsContainer.classList.add("selected-exercise-steps");

    //Setup steps content
    for (let step of guide.steps) {
        let stepEl = document.createElement('li');
        stepEl.innerHTML = step;
        stepsContainer.appendChild(stepEl);
    }

    //Setup the tab panel
    let tabPanel = document.createElement('sl-tab-panel');
    tabPanel.name = title;
    tabPanel.appendChild(stepsContainer);

    return tabPanel;

}

//Render the selected exercise tips and warnings
function RenderTipsAndWarnings(guide) {

    let title = "Tips and Warnings";

    //Create the tips and warnings container as an unordered list
    let tipsWarningsContainer = document.createElement('ul');
    tipsWarningsContainer.classList.add("selected-exercise-tips-warnings");

    //Setup tips content
    for (let tip of guide.tips) {
        let tipEl = document.createElement('li');
        tipEl.innerHTML = tip;
        tipsWarningsContainer.appendChild(tipEl);
    }
    //Setup warnings content
    for (let warning of guide.warnings) {
        let warningEl = document.createElement('li');
        warningEl.innerHTML = warning;
        tipsWarningsContainer.appendChild(warningEl);
    }

    //Setup the tab panel
    let tabPanel = document.createElement('sl-tab-panel');
    tabPanel.name = title;
    tabPanel.appendChild(tipsWarningsContainer);

    return tabPanel;

}