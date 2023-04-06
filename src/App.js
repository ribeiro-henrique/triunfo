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
    isSaveButtonDisabled: true,
  };

  validationIputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
    } = this.state;

    const valName = cardName.length > 0;
    const num1 = Number(cardAttr1);
    const num2 = Number(cardAttr2);
    const num3 = Number(cardAttr3);
    const describe = cardDescription.length > 0;
    const rare = cardRare.length > 0;
    const imaage = cardImage.length > 0;
    const unitValue = 90;
    const groupValue = 210;

    const firstA = num1 >= 0 && num1 <= unitValue;
    const secondA = num2 >= 0 && num2 <= unitValue;
    const thirdA = num3 >= 0 && num3 <= unitValue;

    const sumSum = (num1 + num2 + num3) <= groupValue;

    this.setState({
      isSaveButtonDisabled: !(valName && describe && rare
          && imaage && firstA && secondA && thirdA && sumSum),
    });
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    console.log(value);

    this.setState({
      [name]: value,
    }, () => {
      this.validationIputs();
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <main>
        <h1>Trunfo!</h1>
        <article>
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
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
          <Card
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
        </article>
      </main>
    );
  }
}

export default App;
