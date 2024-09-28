export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.items.item;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;