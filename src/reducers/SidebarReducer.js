import CHANGE_SIDEBAR from '../actions/ActionsSidebar'

let initialSidebar = {
  currentPage: "balloonPage"
};

const sidebarReducer = (state = initialSidebar, action) => {
  switch (action.type) {
    case "CHANGE_SIDEBAR":
      return Object.assign({}, state, {
        currentDisplayedPage: action.newSidebar
      });
    case "PRE_CHANGE_SIDEBAR":
      return Object.assign({}, state, {
        currentPage: action.newSidebar
      });

    default:
      return state;
  }
}

export default sidebarReducer;
