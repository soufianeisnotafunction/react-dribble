import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
              <Home />
            </div>
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
