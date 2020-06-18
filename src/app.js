import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Count: null,
      Results: [],
    };
  }

  getFormData = data => {
    this.setState({Results: data});
    console.log(this.state.Results);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form saveData = {this.getFormData} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
