import React from 'react';
import styles from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    value: '',
  };

  onStateValueUpdate = data => {
    this.setState({ value: data.currentTarget.value });
  };
  onSubmitValue = event => {
    event.preventDefault();
    if(this.state.value){
    return (this.props.onSubmit(this.state.value),
    this.setState({value: ''}))
    }
    return alert('запрос для поиска пуст')
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.onSubmitValue} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButton}>Search</span>
          </button>

          <input
            onChange={this.onStateValueUpdate}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            value = {this.state.value}
            // autoFcus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
