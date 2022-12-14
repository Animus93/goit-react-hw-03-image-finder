import React, { Fragment } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { FallingLines } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    valueToSerch: '',
    page: 1,
    isLoading: false,
    largeImg: '',
  };

  onUpdateSerchValue = value => {
    this.setState({
      valueToSerch: value,
      page: 1
    });
  };

  onSerchMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSwitchLoader = value => {
    this.setState({ isLoading: value });
  };

  onImgListner = data => {
    this.setState({ largeImg: data });
  };

  render() {
    return (
      <Fragment>
        <Searchbar onSubmit={this.onUpdateSerchValue} />
        {this.state.valueToSerch && (
          <Fragment>
            <ImageGallery
              valueToSerch={this.state.valueToSerch}
              page={this.state.page}
              appIsLoading={this.onSwitchLoader}
              clickHandler={this.onImgListner}
            />
          </Fragment>
        )}
        {!this.state.isLoading && this.state.valueToSerch && (
          <Button id="LoadMoreBtn" onClick={this.onSerchMoreBtn} />
        )}
        {this.state.isLoading && (
          <div className={styles.FallingLines}>
            <FallingLines
              color="#3f51b5"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        )}
        {this.state.largeImg && 
        <Modal
        largeImg = {this.state.largeImg}
        clickHandler={this.onImgListner}
        />
        }
      </Fragment>
    );
  }
}
