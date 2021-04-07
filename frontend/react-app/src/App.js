import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // alert('Handle the form submission');
    fetch('http://localhost:3001/submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ someData: "Some data as a string"})
    }).then(response => console.log(response.json()));
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>Enter as many of the missing person's details as possible</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstname" />
          </label><br/>
          <label>
            Last Name:
            <input type="text" name="lastname" />
          </label><br/>
          <label>
            Height:
            <input type="text" name="height" />
          </label><br/>
          <label>
            Weight:
            <input type="text" name="weight" />
          </label><br/>
          <label>
            Last Seen:
            <input type="text" name="lastseen" />
          </label><br/>
          <label>
            Pictures:
            <input type="text" name="pictures" />
          </label><br/>
          <label>
            Social Media Links:
            <input type="text" name="social" />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
        </header>
      </div>
    );
  }
}

export default App;
