import React from 'react';
import PropTypes from 'prop-types';
import './form.css';
import Button from '@mui/material/Button';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const sptrun = (
      <label htmlFor="trunfo-input">
        Super Card
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    return (
      <form>
        <fieldset className="field">
          <h1>Create Card</h1>
          <label htmlFor="name-input">
            Name:
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Description:
            <input
              type="textarea"
              data-testid="description-input"
              id="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            Strength:
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            Intelligence:
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            Luck:
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            Image:
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Kind:
            <select
              type="select"
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="silver">silver</option>
              <option value="gold">gold</option>
            </select>
          </label>
          {
            hasTrunfo ? <span>You already have a super card in your deck</span> : sptrun
          }
          <Button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            variant="contained"
          >
            Save
          </Button>
        </fieldset>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
