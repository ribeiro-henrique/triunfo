import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    board: [], // dica, array vazio para receber o obj
    hasTrunfo: false,
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      board,
      cardTrunfo,
      hasTrunfo, // conforme preconizado na mentoria
    } = this.state;

    const myObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
    };

    this.setState({
      board: [...board, myObject], // spread op copia o board, add meu obj nele
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: cardTrunfo ? true : hasTrunfo, // lógica conforme mentoria
    });
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
    const { value, name, type, checked } = target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
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
      hasTrunfo,
    } = this.state;

    const { board } = this.state;

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
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
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
            hasTrunfo={ hasTrunfo }
          />
        </article>
        <section>
          <h2>Seus Cards!</h2>
        </section>
        <div>
          { board.map((e) => (
            <Card
              key={ Math.random() }
              cardName={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.cardAttr1 }
              cardAttr2={ e.cardAttr2 }
              cardAttr3={ e.cardAttr3 }
              cardImage={ e.cardImage }
              cardRare={ e.cardRare }
              cardTrunfo={ e.cardTrunfo }
              hasTrunfo={ e.hasTrunfo }
            />
          )) }
        </div>
      </main>
    );
  }
}

export default App;
