import FriendListItem from './FriendListItem.jsx';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list}>
            {friends.map((friend)=> {
                
                return <FriendListItem 
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline}
                    key={friend.id}
                />
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList;