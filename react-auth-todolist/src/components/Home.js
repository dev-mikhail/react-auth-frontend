// Home.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import store from '../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';
import { createCharacter, readCharacterAll, readCharacter, deleteCharacter } from '../actions/character';
import Table from './Table'
import Form from './Form'

class Home extends Component {
  state = {
    characters: [
    ],
  }

  componentDidMount() {
    this.props.readCharacterAll(); //fetch all records
  }

  componentDidUpdate(prevProps) {
    if (this.props.characters.data != prevProps.characters.data) {
      this.setState({ characters: this.props.characters.data });
    }
  }

  onClickDelete = id => {
    this.props.deleteCharacter(id);
  }

  onClickInsert = character => {
    this.props.createCharacter(character);
  }

  render() {
    const { characters } = this.state
    const characters = this.props.characters.data;

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.insertCharacter} />
        <Table characterData={characters} removeCharacter={this.onClickDelete} />
        <Form handleSubmit={this.onClickInsert} />
      </div>
    );
  }
}

Home.propTypes = {
  createCharacter: PropTypes.func.isRequired,
  readCharacterAll: PropTypes.func.isRequired,
  readCharacter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: state.character,
  errors: state.errors
});

// const mapDispatchToProps = {
//     registerUser: registerUser
// }

export default connect(mapStateToProps, { createCharacter, readCharacterAll, readCharacter, deleteCharacter })(withRouter(Home))

