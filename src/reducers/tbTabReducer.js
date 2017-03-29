import CHANGE_TAB from '../actions/ActionsTBTTab';

let initialTBTab = {
  currentTab: "home"
};

const tbTabReducer = (state = initialTBTab, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return Object.assign({}, state, {
        currentTab: action.newTab
      });
    default:
      return state
  }
}
export default tbTabReducer;
