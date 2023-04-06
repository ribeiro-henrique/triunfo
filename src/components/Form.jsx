import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
      <form action="">
        <label htmlFor="nome">
          Nome:
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            name="cardName"
            id="nome"
          />
        </label>
        <label htmlFor="descri">
          descrição:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="cardDescription"
            id="descri"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="forca">
          Atributo:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="forca"
          />
        </label>
        <label htmlFor="agility">
          Atributo:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="agility"
          />
        </label>
        <label htmlFor="wisdom">
          Atributo:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="wisdom"
          />
        </label>
        <label htmlFor="pic">
          Imagem:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="pic"
          />
        </label>
        <label htmlFor="rar">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
            id="rar"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { console.log(hasTrunfo) }
        { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : (

          <label htmlFor="checkeeed">
            Super Trybe Trunfo
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="checkeeed"
            />
          </label>
        ) }
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
