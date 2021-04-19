import styles from './Section.module.css';

const Section = ({ children }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            {children}
            </section>
    );
}


export default Section;