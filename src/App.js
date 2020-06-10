import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './Login';
import Vehicles from './Vehicles.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={() => <Login onTokenChange={ this.handleTokenChange } /> }> 
            { this.state.token !== undefined ? <Redirect to="/vehicles" /> : <Login onTokenChange={ this.handleTokenChange } /> }
          </Route>
          <Route path="/vehicles" component={() => <Vehicles token={this.state.token} />}/>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
