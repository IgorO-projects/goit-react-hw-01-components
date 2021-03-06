import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {

return (
    <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt={name}
            className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
    </div>
);
};

Profile.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}

export default Profile;