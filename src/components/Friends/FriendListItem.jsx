import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
    
    return (
        <li className={styles.item}>
            {status ? (<span className={styles.status__active}>{status}</span>) 
            : (<span className={styles.status}>{status}</span>)
            }
            <img className={styles.avatar} src={avatar} alt={name} width="48"/>
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    status: false,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool,
}

export default FriendListItem;