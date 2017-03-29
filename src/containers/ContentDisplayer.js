import { connect } from 'react-redux';
import { changeSidebar } from '../actions/ActionsSidebar';
import MainPane from '../MainPane';

const mapStateToProps = (state, ownProps) => {

  return {
    loadingPage: state.SidebarReducer.currentPage,
    currentPage: state.SidebarReducer.currentDisplayedPage || ownProps.defaultPage
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    switchToNext: () => {
      dispatch(changeSidebar(ownProps.nextPage))
    },
    switchToPrev: () => {
      dispatch(changeSidebar(ownProps.prevPage))
    }
  }
};

const ContentDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPane)

export default ContentDisplay;
