import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor() {
    super();

    this.handleDis = this.handleDis.bind(this);

    this.state = {
      situation: false,
    };
  }

  handleDis(event) {
    const { target } = event;
    if (target.checked) {
      this.setState({
        situation: true,
      });
    } else if (!target.checked) {
      this.setState({
        situation: false,
      });
    }
  }

  render() {
    const {
      onChangeName,
      onChangeKind,
      onChangeTrunf,
    } = this.props;

    const { situation } = this.state;

    return (
      <>
        <label htmlFor="name-filter">
          Filter by name:
          <input
            type="text"
            data-testid="name-filter"
            onChange={ onChangeName }
            disabled={ situation }
          />
        </label>
        <label htmlFor="rare-filter">
          Filter kind:
          <select
            type="select"
            data-testid="rare-filter"
            onChange={ onChangeKind }
            disabled={ situation }
          >
            <option value="All">All</option>
              <option value="normal">normal</option>
              <option value="silver">silver</option>
              <option value="gold">gold</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          Filter by Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="trunfo-filter"
            onChange={ onChangeTrunf }
            onClick={ this.handleDis }
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeKind: PropTypes.func.isRequired,
  onChangeTrunf: PropTypes.func.isRequired,
};

export default Filter;
