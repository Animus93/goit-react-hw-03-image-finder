import React from 'react';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  clickHandler,
  id,
}) => {
  return (
    <li
      onClick={() => {
        clickHandler(largeImageURL);
      }}
      // key={id}
      className={styles.ImageGalleryItem}
    >
      <img
        className={styles.ImageGalleryItemImage}
        // key={id}
        href={largeImageURL}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
