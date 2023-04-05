import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="">
          Nome:
          <input data-testid="name-input" type="text" name="" id="" />
        </label>
        <label htmlFor="">
          descrição:
          <textarea data-testid="description-input" name="" id="" cols="30" rows="10" />
        </label>
        <label htmlFor="">
          Atributo:
          <input data-testid="attr1-input" type="number" name="" id="" />
        </label>
        <label htmlFor="">
          Atributo:
          <input data-testid="attr2-input" type="number" name="" id="" />
        </label>
        <label htmlFor="">
          Atributo:
          <input data-testid="attr3-input" type="number" name="" id="" />
        </label>
        <label htmlFor="">
          Imagem:
          <input data-testid="image-input" type="text" name="" id="" />
        </label>
        <label htmlFor="">
          Raridade:
          <select data-testid="rare-input" name="" id="">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
