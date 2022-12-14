import React, { Component } from 'react';
import Authenticate from 'react-openidconnect';
import { OidcSettings } from './oidcsettings';
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.userLoaded = this.userLoaded.bind(this); 
    this.userUnLoaded = this.userUnLoaded.bind(this);
 
    this.state = { user: undefined };
  }  
 
  userLoaded(user) {
    if (user)
      this.setState({ "user": user });
  } 
  
  userUnLoaded() {
    this.setState({ "user": undefined });
  } 
 
  NotAuthenticated() {
    return <div>You are not authenticated, please click here to authenticate.</div>;
  }

  // @NOTE This function is optional. If you not pass it will looks for "#id_token" in the URL
  checkAuthentication() {
    return window.location.href.includes("my_token_hash"); 
  }
 
  render() {
      return (
        <Authenticate         
          OidcSettings={OidcSettings} 
          // checkAuthentication={checkAuthentication}
          userLoaded={this.userLoaded} 
          userunLoaded={this.userUnLoaded} 
          renderNotAuthenticated={this.NotAuthenticated}
        >
            <div>If you see this you are authenticated.</div>
        </Authenticate>
      )
  }
}

export default App;