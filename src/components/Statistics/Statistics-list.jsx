import StatisticalItem from './Statistical-item.jsx';
import styles from './Statistics-list.module.css';
import PropTypes from 'prop-types';

const StatisticsList = ({ statisticalData }) => {

 return (
     <ul className={styles.list}>
         {statisticalData.map((statisticalElement) => {

         return <StatisticalItem 
         key={statisticalElement.id}
         label={statisticalElement.label}
         percentage={statisticalElement.percentage}
         />
         })}
     </ul>
 )
};

StatisticsList.propTypes = {
    statisticalData: PropTypes.array.isRequired,
}


export default StatisticsList;