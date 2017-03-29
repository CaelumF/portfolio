import React from 'react'
import { connect } from 'react-redux';
import { changeSidebar, preChangeSidebar } from '../actions/ActionsSidebar';
import SidebarItem from '../SidebarItem';

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.SidebarReducer.currentPage
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onClick: () => {
      dispatch(preChangeSidebar(ownProps.contentId))
      setTimeout(() => {
        dispatch(changeSidebar(ownProps.contentId))
      }, 200)

    }
  }
};

const SidebarChanges = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarItem);

export default SidebarChanges;
