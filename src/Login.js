import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import FormValidator from './widgets/FormValidator.js';
import PopUp from './widgets/Popup.js';
import ApiService from './apiService/apiService';

class Login extends Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      email: 'frontend-dev@easycarros.com',
      password: 'Fr0nt3ndR0ck5!'
    }
  }
  
  validator_email = new FormValidator({
    field: 'email',
    method: 'isEmpty',
    valid: false,
    message: 'Insira um e-mail válido.'
  });

  validator_password = new FormValidator({
    field: 'password',
    method: 'isEmpty',
    valid: false,
    message: 'Insira uma senha válida.'
  });

  submit = async () => {
        
    if (this.validator_email.validate(this.state)){
        ApiService.postAuth(JSON.stringify(this.state))
                  .then(res => this.props.onTokenChange(res.data.token));
    }else{
        PopUp.exibeMensagem('error', "O e-mail ou a senha informados estão incorretos.")
    }
  }

  eventListener = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
  }

  render() {

    const { email, password } = this.state;

    return (
      <Fragment>
        <div style={{height: 32}}/>
        
        <div className="container centered highlight">
          <img className="responsive-img logo" src="https://s3.amazonaws.com/sample-login/companies/avatars/000/000/788/original/Logo_EasyCarros_Vertical_blue.png" alt="Easy Carros" />
          <div style={{height: 32}}/>
          <div className="col s12">
            <label htmlFor="email">E-mail</label>
            <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={this.eventListener}
                />
          </div>
          <div className="col s12">
            <label htmlFor="password">Senha</label>
            <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.eventListener}
                />
          </div>
          <div style={{height: 16}}/>
          <div className="row">
            <button onClick={this.submit}
                    className="waves-effect waves-light btn-large blue col s12 m12 l12">
                      Entrar
            </button>
          </div>
        </div>
      </Fragment>
    );
  }

}

export default Login;
