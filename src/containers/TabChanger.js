import React from 'react'
import { connect } from 'react-redux';
import { changeTab } from '../actions/ActionsTBTTab';
import TBTab from '../TBTab';

const mapStateToProps = (state, ownProps) => {
  return {
    activeTab: state.tbTabReducer.currentTab
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onClick: () => {
      dispatch(changeTab(ownProps.text))
    }
  }
};

const TabChanges = connect(
  mapStateToProps,
  mapDispatchToProps
)(TBTab);

export default TabChanges;
