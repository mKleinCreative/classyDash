import React, { Component } from 'react';
import { Button } from 'primereact/button';
import {InputForm} from '../../components/inputform';

export default class OnBoarding extends Component {
  state = {
    clicked: false
  }

  handleClicked = () => {
    console.log('this.state.clicked (╯°□°)╯︵ ┻━┻ ', this.state.clicked)
    return this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false})
  }

  showSignIn = () => {
    if (this.state.clicked) {
      return <InputForm />
    } else {
      return (
        <div className="content-section signin__button">
          <Button label="Authenticate With Github" style={{ marginLeft: 4 }} onClick={() => this.handleClicked()} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
          {this.showSignIn()}
      </div>
    );
  }
}
