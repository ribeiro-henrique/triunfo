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
    } = this.props;

    return (
      <form action="">
        <label htmlFor="">
          Nome:
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            name="cardName"
            id=""
          />
        </label>
        <label htmlFor="">
          descrição:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="cardDescription"
            id=""
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="">
          Atributo:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id=""
          />
        </label>
        <label htmlFor="">
          Atributo:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id=""
          />
        </label>
        <label htmlFor="">
          Atributo:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id=""
          />
        </label>
        <label htmlFor="">
          Imagem:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
            name="cardImage"
            id=""
          />
        </label>
        <label htmlFor="">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
            id=""
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="">
          Super Trybe Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id=""
          />
        </label>
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
};

export default Form;
