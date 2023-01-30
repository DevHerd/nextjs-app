import styles from './Grid.module.scss';

const Grid = ({ children }) => {
  return <div className={styles.Grid}>{children}</div>;
};

export default Grid;
