// Home.js

import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

export default class Home extends Component {
  state = {
    characters: [
    ],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  insertCharacter = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.insertChracter} />
      </div>
    )
  }
}