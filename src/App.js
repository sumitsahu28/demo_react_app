import * as React from 'react';
import './App.css';
import List from './list';
import SelectedList  from './selectedList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions';

class App extends React.Component {
  
 render(){
    return (
        <div className='rowC'>
            <List provinces={this.props.provinces} setSelected={this.props.actions.modifyList} />
            <SelectedList provinces={this.props.provinces} setUnSelected={this.props.actions.modifyList}/>
        </div>
    );
    }
 }

 function mapStateToProps(state) {
    return state
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App)