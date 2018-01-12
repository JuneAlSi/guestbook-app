import React from 'react';
import AddMyName from './AddMyName';
import Names from './Names';
import Header from './Header';
import Action from './Action';

export default class GuestbookApp extends React.Component {
  state = {
    names: [],
  };

  handleGreeting = () => {
    alert('Nice to meet you. Have fun!');
  };

  handleDeleteNames = () => {
    this.setState(() => ({ names: [] }));
  };

  handleDeleteName = (nameToRemove) => {
    this.setState((prevState) => ({
      names: prevState.names.filter((name) => nameToRemove !== name)
    }));
  };

  handleAddMyName = (name) => {
    if (!name) {
      return 'Enter valid value to add name';
    } else if (this.state.names.indexOf(name) > -1) {
      return 'This name has already exists';
    }

    this.setState((prevState) => ({
      names: prevState.names.concat(name)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('names');
      const names = JSON.parse(json);

      if(names) {
        this.setState(() => ({ names }));
      }
    } catch (e) {
      // Do nothing 
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.names.length !== this.state.names.length) {
      const json = JSON.stringify(this.state.names);
      localStorage.setItem('names', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Welcome';

    return(
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasNames={this.state.names.length > 0}
            handleGreeting={this.handleGreeting}
          />
          <div className="widget">
            <Names 
              names={this.state.names}
              handleDeleteNames={this.handleDeleteNames}
              handleDeleteName={this.handleDeleteName}
            />
            <AddMyName 
              handleAddMyName={this.handleAddMyName}
            />
          </div>
        </div>
      </div>
    );
  }
}