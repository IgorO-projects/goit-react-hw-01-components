import styles from './Statistics-list.module.css';
import StatisticalItem from './Statistical-item.jsx';

const StatisticsList = ({ statisticalData }) => {

 return (
     <ul className={styles.list}>
         {statisticalData.map((statisticalElement) => {
             console.log(statisticalElement);

         return <StatisticalItem 
         key={statisticalElement.id}
         label={statisticalElement.label}
         percentage={statisticalElement.percentage}
         />
         })}
     </ul>
 )
};

export default StatisticsList;