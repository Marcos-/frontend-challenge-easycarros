import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Login extends Component {

  state = {
    cars: [
      {
        id: '01',
        plate: 'ovt1200'
      },
      {
        id: '02',
        plate: 'ovt1201'
      }
    ]
  }

  render() {
    return (
      <Fragment>

            <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Telephone</label>
            </div>
        
      </Fragment>
    );
  }

}

export default Login;
