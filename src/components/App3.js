// Aula de estado
import React from 'react';

class App3 extends React.Component {
    constructor (props){
        super(props);
        this.state = {nome: ' ', idade: 26};
        this.changeName = this.changeName.bind(this);
    }

    changeName = (event) => {
        this.setState({nome: event.target.value})
    }

    render(){
        return(
            <>
                Diga algo e eu completo: <input type="text" value={this.state.nome} onChange={this.changeName}></input>
                <p>
                    O Pedro Henrique {this.state.nome}
                </p>
            </>
        )
    }
}

export default App3; 