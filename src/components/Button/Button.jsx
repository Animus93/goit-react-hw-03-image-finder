import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button
      className={styles.Button}
      placeholder="load more"
      onClick={() => {
        onClick();
      }}
    >
      load more
    </button>
  );
};
