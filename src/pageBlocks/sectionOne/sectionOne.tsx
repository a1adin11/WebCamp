import styles from "./sectionOne.module.scss";

const SectionOne = () => {
  return (
    <section className={styles.root}>
      <h1>Путь к славе</h1>
      <img src="src\assets\img\handPng.png" alt="photo" />
      <p>22.03-30.03</p>
    </section>
  );
};

export default SectionOne;
