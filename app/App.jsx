import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header.jsx';
import Layout from './components/layout/Layout.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Layout />
            </div>
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
