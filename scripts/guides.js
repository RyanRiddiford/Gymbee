/*
 * Contains functions and variables responsible for the guide listings functionality
 */

import { CreateAttributePair, RemoveAllChildren, exerciseGuideDisplay, attributeHeaders, data, PerformLoadAnimation, targetViewport } from "/scripts/shared.js";
import { SetFilteredGuides } from "/scripts/filter-exercise.js";
import { LoadExerciseGuide } from "/scripts/active-guide.js";

//Load the next page of exercise guides
export function GetExercises() {
    //Empty rendered exercise listings
    RemoveAllChildren([exerciseGuideDisplay.guideListings]);
    //Set filtered list of guides
    SetFilteredGuides();
    //Setup listing properties
    SetupListingNavigation();
    //Render exercise listings
    RenderExerciseListings();
}

//Loads the next batch of exercise guide listings
async function LoadMoreExercises() {
    //Check if there is another page to load
    if (exerciseGuideDisplay.currPage < exerciseGuideDisplay.numPages) {
        exerciseGuideDisplay.currPage++;

        let loadMoreBtn = document.getElementById('load-more-btn');
        let targetEl = document.getElementById('list-button-container');
        targetEl.removeChild(loadMoreBtn);
        //Perform progress bar animation
        await PerformLoadAnimation([targetEl], "Loading More Guides", true, "load-more-prog-bar");

        //After progress bar animation, add the load more button back, and render the next page of guide listings
        targetEl.appendChild(loadMoreBtn);
        RenderExerciseListings();

    }
}

//Set up listing navigation properties
function SetupListingNavigation() {
    //Getting number of pages
    exerciseGuideDisplay.numPages = data.filteredGuides.length / exerciseGuideDisplay.maxPerPage;
    exerciseGuideDisplay.numPages -= ((data.filteredGuides.length % exerciseGuideDisplay.maxPerPage) / exerciseGuideDisplay.maxPerPage);
    if (data.filteredGuides.length % exerciseGuideDisplay.maxPerPage > 0)
        exerciseGuideDisplay.numPages++;
    //Set current page
    exerciseGuideDisplay.currPage = 1;
}

//Returns a customized Shoelace UI tooltip element
function InitGuideTooltip(guide) {

    //Create the attribute container
    let attContainer = document.createElement('div');

    //Create the shoelace tooltip element
    let tooltipEl = document.createElement('sl-tooltip');
    tooltipEl.classList.add('listing-tooltip');
    tooltipEl.placement = "bottom-start";

    //Style and append attribute headers and values to the attribute container
    for (let attHeader of attributeHeaders)
        attContainer.appendChild(CreateAttributePair(attHeader, guide));

    //Set the tooltip's content to the attributes container
    tooltipEl.content = attContainer;

    return tooltipEl;

}

//Get the guide's index for the filtered guides list
function GetGuideIndex() {
    if (data.filteredGuides.length > 10)
        return exerciseGuideDisplay.currPage * 10 - 10;
    else
        return 0;
}

//Render the exercise listings
function RenderExerciseListings() {

    //Load first page of guides unfiltered
    for (let count = 0, guideIndex = GetGuideIndex();
        count < exerciseGuideDisplay.maxPerPage && guideIndex < data.filteredGuides.length;
        count++, guideIndex++) {

        let currGuide = data.filteredGuides[guideIndex];

        //Initialise this guide's tooltip element
        let tooltipEl = InitGuideTooltip(currGuide);

        //Create the exercise listing container
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('exercise-listing');

        //Create the top and bottom containers inside the listing container
        let topChild = document.createElement('div');
        let botChild = document.createElement('div');
        topChild.classList.add('exercise-listing-img');
        botChild.classList.add('exercise-listing-text');

        //Add the exercise's first visual as the listing's top container's background
        topChild.style.backgroundImage = 'url(' + currGuide.visualSrc + ')';
        //Add the exercise's name as the vottom container's text
        botChild.innerHTML = currGuide.name;
        //Append child elements of listing container
        containerDiv.appendChild(topChild);
        containerDiv.appendChild(botChild);
        //Add a guideIndex HTML attribute to the listing for loading the active guide when selected
        containerDiv.guideIndex = guideIndex;

        //Assign the listing's id as the exercise's name in lower case and kebab case
        let id = currGuide.name.replace(/\s+/g, '-').toLowerCase();
        containerDiv.id = id;

        //Add onclick event for loading guide
        containerDiv.addEventListener('click', (event) => {
            //If listing isn't already active
            if (!event.currentTarget.classList.contains("exercise-listing-active")) {
                //Lower the listing's brightness while selected
                HighlightOpenedListing(event.currentTarget);
                //Load the guide
                LoadExerciseGuide(event.currentTarget.guideIndex);
                //If the viewport is less than or equal to the small viewport target
                if (Number.parseInt(window.innerWidth) <= targetViewport.small) {
                    //Show the active guide popup
                    exerciseGuideDisplay.activeGuidePopup.show();
                }
            }
        });

        //Append guide listing to listings container
        tooltipEl.appendChild(containerDiv);
        exerciseGuideDisplay.guideListings.appendChild(tooltipEl);

    }

    //Get the container for guide listings and the load more button
    let listBtnContainer = document.querySelector('#list-button-container');
    //Attempt to get the load more button
    let loadMoreButtonEl = document.getElementById('load-more-btn');

    //Create and append button for loading more guides
    if (exerciseGuideDisplay.currPage < exerciseGuideDisplay.numPages && exerciseGuideDisplay.currPage == 1 && loadMoreButtonEl == null)
        listBtnContainer.appendChild(CreateLoadMoreButton());
    //Remove the load more button if no more pages are left to load
    else if (exerciseGuideDisplay.currPage == exerciseGuideDisplay.numPages && loadMoreButtonEl != null)
        listBtnContainer.removeChild(loadMoreButtonEl);

}

//Highlights the opened exercise listing
function HighlightOpenedListing(el) {
    let currActive = document.querySelector('.exercise-listing-active');
    //Remove highlight of listing previously opened
    if (currActive != null)
        currActive.classList.remove('exercise-listing-active');
    //Highlight the currently opened listing
    el.classList.add('exercise-listing-active');
}

//Create the load more button for exercise listings
function CreateLoadMoreButton() {
    let buttonEl = document.createElement('button');
    buttonEl.id = 'load-more-btn';
    buttonEl.innerHTML = 'Load More';
    //Add onclick event to button that loads the next page of exercises
    buttonEl.addEventListener('click', () => {
        LoadMoreExercises();
    });
    return buttonEl;
}