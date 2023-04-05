import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name, type } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Adicione Nova Carta</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
