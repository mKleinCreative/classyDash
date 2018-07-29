import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export class InputForm extends Component {
  state = {
    user: {
      githubUser: null,
      team: null,
      preferredName: null
    }
  }

  handleAuthenticate = (e) => {

  }
  render() {
    return (
      <form action="#" method="POST" id="signInForm">
        <div className="content-section userSignIn">
          <h3 className="first">Authenticate With Github</h3>
          <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-md-4">
              <div className="ui-inputgroup">
                <div className="ui-float-label ui-g-6">
                  <label htmlFor="in">Github Username</label>
                </div>
                <div className="ui-g-6">
                  <InputText id="github-user" value={this.state.githubUser} onChange={(e) => this.setState({ githubUser: e.target.githubUser })} />
                </div>
              </div>
            </div>
            <div className="ui-inputgroup">
              <div className="ui-float-label ui-g-6">
                <label htmlFor="team-name">Team Name</label>
              </div>
              <div className="ui-g-6">
                <InputText id="team-name" value={this.state.team} onChange={(e) => this.setState({ team: e.target.team })} />
              </div>
            </div>
          </div>
          <div className="ui-inputgroup">
            <div className="ui-float-label ui-g-6">
              <label htmlFor="preferred-name">Preferred Name</label>
            </div>
            <div className="ui-g-6">
              <InputText id="preferred-name" value={this.state.preferredName} onChange={(e) => this.setState({ preferredName: e.target.preferredName })} />
            </div>
          </div>
        </div>
      <Button label="Authenticate" style={{marginTop: 5}}/>
      </form>
    )
  }
}

