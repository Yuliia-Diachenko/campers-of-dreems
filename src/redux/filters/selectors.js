import { createSelector } from "@reduxjs/toolkit";
import  { selectCampers } from "../campers/selectors";

export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectTransmissionFilter = (state) => state.filters.transmission;
export const selectBathroomFilter = (state) => state.filters.bathroom;
export const selectKitchenFilter = (state) => state.filters.kitchen;
export const selectACFilter = (state) => state.filters.AC;

export const selectVisibleCampers = createSelector([
    selectCampers, 
    selectLocationFilter,  
    selectFormFilter,
    selectTransmissionFilter,
    selectBathroomFilter,
    selectKitchenFilter,
    selectACFilter,
 ], (campers, 
        locationFilter, 
        formFilter, 
        transmissionFilter, 
        bathroomFilter, 
        kitchenFilter, 
        ACFilter ) => {
    return campers.filter(camper =>
            camper.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
            camper.form.includes(formFilter) || camper.transmission.includes(transmissionFilter) ||
            camper.bathroom.includes(bathroomFilter) ||
            camper.kitchen.includes(kitchenFilter) ||
            camper.AC.includes(ACFilter)
            );
});


