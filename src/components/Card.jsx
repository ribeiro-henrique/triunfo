import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <section className="card-div">
        <p data-testid="name-card">
          { cardName }
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Força:
          {' '}
          <span>
            { cardAttr1 }
          </span>
        </p>
        <p data-testid="attr2-card">
          Agilidade:
          {' '}
          <span>
            { cardAttr2 }
          </span>
        </p>
        <p data-testid="attr3-card">
          Stamina:
          {' '}
          <span>
            { cardAttr3 }
          </span>
        </p>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        { cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : '' }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
