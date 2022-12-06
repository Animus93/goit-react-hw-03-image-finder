import React, { Fragment } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import ImageGalleryApi from '../../services/ImageGallery-api';
import { FallingLines } from 'react-loader-spinner';

export class ImageGallery extends React.Component {
  state = {
    galleryArray: [],
    value: 1,
    img: '',
  };

  componentDidMount() {
    this.onStateUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('IMG GALERY componentDidUpdate')
    if (prevProps !== this.props) {
      if (prevProps.valueToSerch !== this.props.valueToSerch) {
        this.setState({ galleryArray: [] });
      }
      return this.onStateUpdate();
    }
    if(this.state.img && prevState.img !== this.state.img){
      console.log('send')
      this.props.clickHandler(this.state.img)
      // this.setState({img: ''})
    }
  }

  onStateUpdate = () => {
    const { valueToSerch, page } = this.props;
    ImageGalleryApi.fetchImages(page, valueToSerch)
      .then(data => {
        if (data) {
          return this.setState(prevState => ({
            galleryArray: [...prevState.galleryArray, ...data],
          }));
        }
        if (this.state.error) {
          alert(this.state.error);
          return this.setState({ error: '' });
        }
        return;
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  clickHandler = (data) => {
    console.log(data)
    return this.setState({img: data});
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        {Boolean(this.state.galleryArray.length) && 
        (
          <ul className={styles.ImageGallery}>
            {this.state.galleryArray.map(img => {
              return (
                <ImageGalleryItem
                  key={img.id}
                  id={img.id}
                  clickHandler={this.clickHandler}
                  webformatURL={img.webformatURL}
                  largeImageURL={img.largeImageURL}
                  tags={img.tags}
                />
              );
            })}
          </ul>
        )}
        {this.state.loading && (
          <div className={styles.FallingLines}>
            <FallingLines
              color="#3f51b5"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        )}
      </Fragment>
    );
  }
}
