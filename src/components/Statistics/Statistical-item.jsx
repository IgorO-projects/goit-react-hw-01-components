import PropTypes from 'prop-types';

const StatisticalItem = ({id, label, percentage}) => {
    return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    )
};


StatisticalItem.propTypes = {
    // id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticalItem;