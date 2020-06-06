import React, {Component} from 'react';


class Form extends Component {

    constructor(props){
        super (props);

        this.stateInitial = {
            id: '',
            plate: ''
        }
        this.state = this.stateInitial;
    }

    eventListener = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submit = () => {
        console.log(this.state);
        
        this.props.addCar(this.state);
        this.setState(this.stateInitial);
    }

    render(){

        const { id, plate } = this.state;

        return (
            <form className="container centered highlight">

                <div className="row">
                    <div className="col s6 offset-s1">
                    <label htmlFor="livro">Placa</label>
                        <input
                            id="livro"
                            type="text"
                            name="plate"
                            value={plate}
                            onChange={this.eventListener}
                            />
                    </div>
                    <div className="col s5">
                        <button className="waves-effect waves-light btn-large blue lighten-1"
                            type="button"
                            onClick={this.submit}>
                                <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }

}

export default Form;