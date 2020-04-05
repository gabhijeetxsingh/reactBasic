import React, {Component} from 'react';
import Table from './table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ name : "abhijeet singh", class : ""};
    this.changeMe = this.changeMe.bind(this);
  }

  changeMe() {
    this.setState({name : "Sanjana hun mai"})
  }

  render () {

    return (<div>
              <p>Test hai ye  {this.state.name}</p>
              <button onClick={this.changeMe}>Change me</button>
              <Table nameOfTable="This is sanjan's table"/>
            </div>)
  }
}

export default App;
