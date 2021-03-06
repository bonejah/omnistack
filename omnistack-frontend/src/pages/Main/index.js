import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/rocketseat_logo.png';
import { Container } from './style';

class Main extends Component {
  constructor(){
    super();

    this.state = {
      newBox: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('title', this.state.newBox)

    const response = await api.post('boxes', {
      title: this.state.newBox,
    });

    console.log('response', response)
    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return(
      <Container>
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input 
            placeholder="Criar um box" 
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </Container>
    );
  }
}

export default Main;