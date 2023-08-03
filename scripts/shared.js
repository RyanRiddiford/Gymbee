/*
 * Contains functions and variables that are shared by multiple .js modules
 */

//Import the guide and general safety tips object content
import { guides, generalSafetyTips } from "/scripts/data.js";

//Export the guides, safety tips, and filtered guides as an object reference
export const data = {
    //The unfiltered guides objects hardcoded in data.js
    guides: guides,
    //The filtered guides that match the filter options criteria
    filteredGuides: undefined,
    //The general safety tips content
    generalSafetyTips: generalSafetyTips,
};

//Variables for controlling and displaying exercise guides
export const exerciseGuideDisplay = {
    //Grid container for exercise listings
    guideListings: document.getElementById('exercise-list'),
    //The active guide container for larger viewports
    activeGuide: document.getElementById('active-guide'),
    //The active guide dialog container for smaller viewports
    activeGuidePopup: document.getElementById('active-guide-popup'),
    //Flags whether or not an active guide is currently loaded
    isActiveGuide: false,
    //The max number of guide listings that can be loaded in one batch
    maxPerPage: 10,
    //The number of pages of guides that meet the filter criteria
    numPages: 0,
    //The current page loaded
    currPage: 0
};

//Setup attribute content
export const attributeHeaders = [
    "Difficulty",
    "Muscle Groups",
    "Equipment Needed"
];

//Target viewport min/max for UI styling
export const targetViewport = {
    small: 1023,
    big: 1024
};

//Render progress bar animation for one or more HTML elements
export async function PerformLoadAnimation(elements, progBarLabel, isIndeterminate, classTag) {

    //Stores the progress bars to create and render
    let progBars = [];

    //Setup the first progress bar
    let progBar = document.createElement('sl-progress-bar');
    progBar.value = 0;
    progBar.label = progBarLabel;
    progBar.classList.add(classTag);
    if (isIndeterminate === true)
        progBar.setAttribute("indeterminate", "");

    //Append a deep clone of the progress bar for each element
    for (let i = 0; i < elements.length; i++) {
        progBars[i] = progBar.cloneNode(true);
        elements[i].appendChild(progBars[i]);
    }

    //Play the progress bar animation
    for (let i = 0; i < 100; i++)
        await Delay(10);

    //Remove the progress bar from each element
    for (let i = 0; i < elements.length; i++)
        if (elements[i].contains(progBars[i]))
            elements[i].removeChild(progBars[i]);

}

//Delay thread execution by milliseconds
export function Delay(msDelay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, msDelay);
    });
}

//Removes all child elements of one or more HTML elements
export function RemoveAllChildren(elements) {
    for (let el of elements)
        while (el.firstChild != null)
            el.removeChild(el.firstChild);
}

//Creates and returns an attribute header-value pair container
export function CreateAttributePair(attHeader, guide, classTag) {

    //Contains an attribute header and value
    let container = document.createElement('div');

    //Add class to container
    if (classTag != "")
        container.classList.add(classTag);

    //Create the attribute header
    let attHeaderEl = document.createElement('div');
    attHeaderEl.style.fontWeight = "900";
    attHeaderEl.style.fontSize = "1.6rem";
    attHeaderEl.innerHTML = attHeader;

    //Create the attribute value
    let attValueEl = document.createElement('div');
    attValueEl.style.fontSize = "1.6rem";

    //Set the attribute header text
    if (attHeader == "Difficulty")
        attValueEl.innerHTML = guide.difficulty;
    else if (attHeader == "Muscle Groups")
        attValueEl.innerHTML = guide.muscleGroups.join(', ');
    else if (attHeader == "Equipment Needed")
        attValueEl.innerHTML = guide.equipment.join(', ');

    //Append the attribute header and value to the container
    container.appendChild(attHeaderEl);
    container.appendChild(attValueEl);

    return container;
}

//Creates a shoelace tab button
export function CreateTabButton(title, slot, classTag) {

    //Setup the tab text
    let span = document.createElement('span');
    span.innerHTML = title;

    //Setup the sl-tab element
    let slTab = document.createElement('sl-tab');
    slTab.classList.add(classTag);
    slTab.slot = slot;
    slTab.panel = title;

    //Append text to sl-tab element
    slTab.appendChild(span);

    return slTab;
}