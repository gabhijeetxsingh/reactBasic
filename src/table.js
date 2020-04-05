import React, {Component} from 'react';

class Table extends Component {

  render () {

    return (<div>
        {this.props.nameOfTable}
        <table border="1">
        <thead>
            <tr>
                <th>name</th>
                <th>class</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>abhijeet</td><td>12</td></tr>
            <tr><td>sanjana</td><td>6</td></tr>
        </tbody>
    </table></div>)
  }
}

export default Table;
