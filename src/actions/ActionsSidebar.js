
const CHANGE_SIDEBAR = 'CHANGE_SIDEBAR';
const PRE_CHANGE_SIDEBAR = 'PRE_CHANGE_SIDEBAR';

export function changeSidebar(newSidebar){
  return {
    type: CHANGE_SIDEBAR,
    newSidebar
  };
}
export function preChangeSidebar(newSidebar){
  return{
    type: PRE_CHANGE_SIDEBAR,
    newSidebar
  }
}
