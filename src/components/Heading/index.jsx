import styles from "../Heading/styles.module.css";
import { TextInput } from "../TextInput";

export const Heading = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navButton}>
          <img src="./favicon-32x32.png" alt="Raian Soares" />
          <h1>ConvĂȘniencia Shopping</h1>
        </div>
        <div>
          <TextInput />
        </div>
      </nav>
    </>
  );
};
