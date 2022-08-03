import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Button from '@mui/material/Button';

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
      btn,
      dltCard,
    } = this.props;

    const dltBtn = (
      <Button
        type="button"
        name={ cardName }
        onClick={ dltCard }
        data-testid="delete-button"
        variant="contained"
        href="contained-buttons"
      >
        Delete
      </Button>
    );

    return (
      <div className='cardHolder'>
        <div className={cardRare}>
          <div className="cardName">          
            <h2 className="nameCard">{cardName}</h2>
          </div>
          <div className="imageContainer">          
            <img
              src={ cardImage }
              alt={ cardName }
              className="cardImage"
            />
            {cardTrunfo ? <p className="trunf">Super Card</p> : ''}
          </div>
          <div className="atrContainer">          
            <p>{`Kind: ${cardRare}`}</p>
            <p>{`Str: ${cardAttr1}  /  Int: ${cardAttr2}  / Luk: ${cardAttr3}`}</p>
          </div>
          <div className='descContainer'>          
            <p>{`${cardDescription}`}</p>
          </div>
        </div>
        { btn ? dltBtn : ''}
      </div>
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
  btn: PropTypes.bool.isRequired,
  dltCard: PropTypes.func.isRequired,
};

export default Card;
