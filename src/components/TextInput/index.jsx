import P from 'prop-types';
import styles from "./styles.module.css";

export const TextInput = ({ searchValue, handleChange }) => {
    return (
      <input
        className={styles.textInput}
        onChange={handleChange}
        value={searchValue}
        types="search"
        placeholder="Consulte aqui seus produtos..."
      />
    );
  };
  
  TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
  };
  