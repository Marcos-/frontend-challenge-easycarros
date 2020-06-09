import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './widgets/Tabela';
import Form from './widgets/Form.js';
import AptService from './apiService/apiService';

class Vehicles extends Component {

  constructor(props){
    super(props);

    this.state = {
      cars: []
    }
  }

  removeCar = index => {
    const {cars} = this.state;
    this.setState({
      cars : cars.filter((id, current) => {
        if (current !== index){
            AptService.deleteVehicle(this.props.token, cars[current].id)
                .then(res => {
                    console.log(res);
                });
            
            return true
        }else
            return false
      })
    })
  }
  
  addCar = car => {
    this.setState({
      cars:[...this.state.cars, car]
    })
    AptService.postVehicle(this.props.token, JSON.stringify(car))
        .then(res => console.log(res));
  }

  componentDidMount(){
    AptService.getVehicles(this.props.token).then((res) => {
      this.setState({cars : [...this.state.cars, ...res.data]})
    });
  }

  render() {
    return (
      <Fragment>
        <div style={{height: 32}}/>
        <Form addCar={this.addCar} />
        <Tabela cars={this.state.cars} removeCar={this.removeCar}/>
      </Fragment>
    );
  }

}

export default Vehicles;
