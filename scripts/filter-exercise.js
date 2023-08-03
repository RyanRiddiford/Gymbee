/*
 * Contains functions and variables responsible for the filter functionality
 */

import { data } from "/scripts/shared.js";
import { GetExercises } from "/scripts/guides.js";

//Filter input elements
const filterInputs = {
    selectFilters: document.querySelectorAll('sl-select'),
    keywordsFilter: document.querySelector('#filter-options sl-input'),
};

//Perform logic on each select filter element
filterInputs.selectFilters.forEach(x => {
    //Set maximum tags visible
    x.maxTagsVisible = 1;
    //Add event that loads new filtered exercises whenever the select element's value changes
    x.addEventListener("sl-change", () => {
        GetExercises();
    });
});

//Add event to keywords filter that loads new filtered exercises whenever its value changes
filterInputs.keywordsFilter.addEventListener("sl-input", () => GetExercises());

//Find all guides that match the filter criteria
export function SetFilteredGuides() {
    //Initialise the data object's filtered guides property as a new empty dynamic array
    data.filteredGuides = [];
    //Add guide to filtered guides array if it meets the filter criteria
    for (let guide of data.guides) {
        if (CheckSelectFilters(guide) == true && CheckKeywordsFilter(guide) == true) {
            data.filteredGuides.push(guide);
        }
    }
}

//Returns true if guide meets select filter criteria, else false
function CheckSelectFilters(guide) {

    //Test guide against each select filter criteria
    for (let select of filterInputs.selectFilters) {

        let currType = select.id;

        //Check guide against muscle groups filter
        if (currType == "muscle-groups-select" && select.value !== undefined && select.value != "") {
            for (let filter of select.value) {
                if (guide.muscleGroups.includes(filter) === false)
                    return false;
            }
        }

        //Check guide against difficulty filter
        else if (currType == "difficulty-select" && select.value !== undefined && select.value != "") {
            if (select.value.includes(guide.difficulty) === false)
                return false;
        }

        //Check guide against equipment filter
        else if (currType == "equipment-select" && select.value !== undefined && select.value != "") {
            for (let filter of select.value) {
                if (guide.equipment.includes(filter) === false)
                    return false;
            }
        }
    }
    return true;
}

//Returns true if guide meets keywords filter criteria, else false
function CheckKeywordsFilter(guide) {

    //Check if keyword input value is a substring of the guide name
    if (filterInputs.keywordsFilter.value != "")
        if (!guide.name.toLowerCase().includes(filterInputs.keywordsFilter.value.toLowerCase()))
            return false;

    return true;

}