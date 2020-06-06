import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Form.js';
import Header from './Header.js';

class App extends Component {

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

  removeCar = index => {
    const {cars} = this.state;
    this.setState({
      cars : cars.filter((id, current) => {
        console.log(index, current);
        return current !== index;
      })
    })
  }
  
  addCar = car => {
    this.setState({
      cars:[...this.state.cars, car]
    })
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
