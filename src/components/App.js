import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';
import yieldfarming from "../yieldfarming.png";
import Button from '@material-ui/core/Button';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0'
    }
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '900px' }}>
              <div className="content mr-auto ml-auto">
                <div style={{
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "left",
                   flex: 1, 
                  flexWrap: 'wrap'
                }}>
                    
                <h1>Empowering Decentralized Finanace</h1>

                <img src={yieldfarming} width="950" height="700" className="App-logo" alt="Three people using a yield farm" />
                  </div>
                  <div style={{
                  flex: 1, 
                  flexWrap: 'wrap'

                  }}>
                <h3>A DeFi staking and lending protocol for investors</h3>
               <div className="App">
                <Button>Documentation</Button>
                <Button>Platform</Button>
                </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
