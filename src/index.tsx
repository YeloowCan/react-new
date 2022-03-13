import React, { Component } from 'react';
import { Button, Card } from 'antd';
import ReactDom from 'react-dom';
import './index.less';

class App extends Component {
  render() {
    return (
      <h1 className="test">
        <Card title="ss" />
        <Button title="aa">sss</Button> Hello, world!{' '}
      </h1>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
