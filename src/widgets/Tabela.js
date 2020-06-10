import React, {Component} from 'react';

const TableHead = () => {

    return (
        <thead>
            <tr>
                <th>Veículos</th>
                <th></th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    if (props.cars.length === 0){
        return (
            <tbody>
                <tr key={0}>
                    <td>Nenhum veículo encontrado!</td>
                </tr>
            </tbody>
        )
    }

    const linhas = props.cars.map((linha, index) =>{
        return (
            <tr key={index}>
                <td>{linha.plate}</td>
                <td>
                    <button className="btn-floating btn-small red"
                        onClick = {() => {props.removeCar(linha.id)}} >
                            <i className="material-icons">remove</i>
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component {

    render(){

        const {cars, removeCar} = this.props;

        return (
            <table className="container highlight">
                <TableHead />
                <TableBody cars={cars} removeCar={removeCar}/>
            </table>
        );
    }
}
export default Tabela;