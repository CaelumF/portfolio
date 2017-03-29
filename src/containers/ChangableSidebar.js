import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../Sidebar'

const mapStateToProps = (state, ownProps) => {
  return{
    activeTab: state.tbTabReducer.currentTab
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    test: () => {

    }
  };
};

const ChangeSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
export default ChangeSidebar
