import React from 'react';

export default class AddMyName extends React.Component {
  state = {
    error: undefined
  };
  
  handleAddMyName = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const error = this.props.handleAddMyName(name);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.name.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-name-error">{this.state.error}</p>}
        <form className="add-name" onSubmit={this.handleAddMyName}>
          <input className="add-name__input" type="text" name="name" />
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
}

