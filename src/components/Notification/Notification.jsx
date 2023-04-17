import css from './notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={css.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;