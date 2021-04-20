import styles from './Statistics-list.module.css';
import PropTypes from 'prop-types';


const StatisticalItem = ({ label, percentage }) => {
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    return (
    <li style={{backgroundColor: randomColor}} 
    className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
    )
};


StatisticalItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticalItem;