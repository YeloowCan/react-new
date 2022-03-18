import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import './index.less';

const ReactNew = () => <App />;

ReactDom.render(<ReactNew />, document.getElementById('root') as HTMLElement);
