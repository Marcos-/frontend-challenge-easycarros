import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './widgets/Tabela';
import Form from './widgets/Form.js';
import Header from './widgets/Header.js';
import ApiService from './apiService/apiService';
import PopUp from './widgets/Popup.js';
import M from  'materialize-css/dist/js/materialize.min.js';

class Vehicles extends Component {

  constructor(props){
    super(props);

    this.state = {
      cars: []
    }
  }

  removeCar = id => {
    const carsUpdated = this.state.cars.filter((car) => {
      return car.id !== id;
    });   
    ApiService.deleteVehicle(this.props.token, id)
      .then(res => {
          if (res.status === 204){           
            this.setState({cars : carsUpdated});
            PopUp.exibeMensagem('success', "Veículo removido com sucesso!");
          }else
          if (res.status === 401){
            PopUp.exibeMensagem('error', "Token inválido ou inexistente");
          }
          else {
            PopUp.exibeMensagem('error', "Erro de comunicação com o servidor");
          }
        }
    ).catch(error => PopUp.exibeMensagem('error', "Erro de comunicação com a api"));    
  }
  
  addCar = car => {
    ApiService.postVehicle(this.props.token, JSON.stringify(car))
        .then(res => {
          if (res.data){
            this.setState({cars:[...this.state.cars, res.data]})
            PopUp.exibeMensagem('success', "Veículo adicionado com sucesso!")
          }else
          if (res.status === 401){
            PopUp.exibeMensagem('error', "Token inválido ou inexistente");
          }else
          if (res.status === 400){
            PopUp.exibeMensagem('error', "Placa inválida ou inexistente");
          }
          else {
            PopUp.exibeMensagem('error', "Erro de comunicação com o servidor");
          }
        }).catch(error => PopUp.exibeMensagem('error', "Erro de comunicação com a api"));
  }

  componentDidMount(){
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
    ApiService.getVehicles(this.props.token).then((res) => {
      if (res.data){
        this.setState({cars : [...this.state.cars, ...res.data]})
        PopUp.exibeMensagem('success', "Dados carregados corretamente")
      }else
      if (res.status === 401){
        PopUp.exibeMensagem('error', "Token inválido ou inexistente");
      }else {
        PopUp.exibeMensagem('error', "Erro de comunicação com o servidor");
      }
    }).catch(error => PopUp.exibeMensagem('error', "Erro de comunicação com a api"));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div style={{height: 32}}/>
        <Form addCar={this.addCar} />
        <Tabela cars={this.state.cars} removeCar={this.removeCar}/>
      </Fragment>
    );
  }

}

export default Vehicles;
