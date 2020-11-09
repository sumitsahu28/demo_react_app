import * as React from 'react';
import './App.css';
import List from './list';
import SelectedList  from './selectedList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  
 render(){
    return (
      <div>
        <Navbar className="color-nav" collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
          <Nav.Link href="#deets">HOME</Nav.Link>
          <Nav.Link href="#deets">My Portfolio</Nav.Link>
          <Nav.Link href="#deets">Clients</Nav.Link>
          </Nav>
          <Form>
          <Button variant="light">Get in Touch</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        <div className='rowC wrapper'>
            <List provinces={this.props.provinces} setSelected={this.props.actions.modifyList} />
            <SelectedList provinces={this.props.provinces} setUnSelected={this.props.actions.modifyList}/>
        </div>
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