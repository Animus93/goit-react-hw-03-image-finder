import React from 'react';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  clickHandler,
}) => {
  return (
    <li
      className={styles.ImageGalleryItem}
    >
      <img
      onClick={()=>{clickHandler(largeImageURL)}}
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
