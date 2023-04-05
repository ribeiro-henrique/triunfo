import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    console.log(value);

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <article>
        <h1>Trunfo!</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          card-name={ cardName }
          card-describe={ cardDescription }
          card-value1={ cardAttr1 }
          card-value2={ cardAttr2 }
          card-value3={ cardAttr3 }
          card-img={ cardImage }
          card-rare={ cardRare }
          card-tryunph={ cardTrunfo }
          onInputChange={ this.handleChange }
        />
      </article>
    );
  }
}

export default App;
