import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Header';
import initialArray from './components/data'

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleDisableSave = this.handleDisableSave.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.checkTrun = this.checkTrun.bind(this);
    this.dltCard = this.dltCard.bind(this);
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.handleKindFilter = this.handleKindFilter.bind(this);
    this.handleTrunfFilter = this.handleTrunfFilter.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      arrayOfCards: initialArray,
      listedArray: initialArray,
    };
  }

  handleChange(event) {
    const { target } = event;
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  handleDisableSave() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const at1 = parseInt(cardAttr1, 10);
    const at2 = parseInt(cardAttr2, 10);
    const at3 = parseInt(cardAttr3, 10);
    const maxTot = 300;
    const minAt = 0;
    const maxAt = 100;
    const check = (
      !(!cardName)
      && !(!cardDescription)
      && !(!cardImage)
      && !(!cardRare)
      && (minAt <= at1)
      && (at1 <= maxAt)
      && (minAt <= at2)
      && (at2 <= maxAt)
      && (minAt <= at3)
      && (at3 <= maxAt)
      && ((at1 + at2 + at3) <= maxTot));
    return !check;
  }

  handleSave() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    const { arrayOfCards } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      arrayOfCards,
    };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      arrayOfCards: [...arrayOfCards, newCard],
      listedArray: [...arrayOfCards, newCard],
    });
  }

  handleNameFilter(event) {
    const { arrayOfCards } = this.state;
    const { target } = event;
    const newArray = arrayOfCards.filter((card) => card.cardName
      .includes(target.value));
    this.setState({
      listedArray: newArray,
    });
  }

  handleKindFilter(event) {
    const { arrayOfCards } = this.state;
    const { target } = event;
    if (target.value !== 'All') {
      const newArray = arrayOfCards.filter((card) => card.cardRare === target.value);
      this.setState({
        listedArray: newArray,
      });
    } else {
      this.setState({
        listedArray: arrayOfCards,
      });
    }
  }

  handleTrunfFilter(event) {
    const { arrayOfCards } = this.state;
    const { target } = event;
    if (target.checked) {
      const newArray = arrayOfCards.filter((card) => card.cardTrunfo === true);
      this.setState({
        listedArray: newArray,
      });
    } else {
      this.setState({
        listedArray: arrayOfCards,
      });
    }
  }

  dltCard(event) {
    const { target } = event;
    const { arrayOfCards } = this.state;
    const newArray = arrayOfCards.filter((obj) => obj.cardName !== target.name);
    this.setState({
      arrayOfCards: newArray,
      listedArray: newArray,
    });
    event.preventDefault();
  }

  checkTrun() {
    const { arrayOfCards } = this.state;
    const verify = arrayOfCards.find((elem) => elem.cardTrunfo);
    return !!verify;
  }

  render() {
    const checker = this.handleDisableSave();
    const verifyer = this.checkTrun();
    const { listedArray } = this.state;

    return (
      <>
        <div className="header">
          <Filter
            onChangeName={ this.handleNameFilter }
            onChangeKind={ this.handleKindFilter }
            onChangeTrunf={ this.handleTrunfFilter }
          />
        </div>
        <div className="logoContainer"></div>
        <div className="middle">
          <Form
            { ...this.state }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleSave }
            isSaveButtonDisabled={ checker }
            hasTrunfo={ verifyer }
          />
          <div className='previewHolder'>
          <Card { ...this.state } btn={ false } dltCard={ this.dltCard } />
          </div>
        </div>
        <div className="botton">          
          {listedArray.map((elem) => (<Card
            key={ elem.cardName }
            { ...elem }
            btn
            dltCard={ this.dltCard }
          />))}
        </div>
        <div className='footer'>
          <span> Developed By Lucas Lopes</span>
        </div>
      </>
    );
  }
}

export default App;
