const CHANGE_TAB = 'CHANGE_TAB';

export function changeTab(newTab){
  return {
    type: CHANGE_TAB,
    newTab
  };
}
