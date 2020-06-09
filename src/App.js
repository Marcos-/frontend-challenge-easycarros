import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './widgets/Header.js';
import AptService from './apiService/apiService';
import Login from './Login';
import Vehicles from './Vehicles.js';

class App extends Component {

  constructor(props){
    super(props);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.state = {
      token: undefined
    }
  }

  handleTokenChange(token){
    this.setState({token});
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div style={{height: 32}}/>
          {this.state.token === undefined &&
           <Login onTokenChange={ this.handleTokenChange } />
          }
          {this.state.token !== undefined &&
           <Vehicles token={ this.state.token } />
          }
      </Fragment>
    );
  }

}

export default App;
