import css from './statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul className={css.statistics_list}>
        <li className={css.statistics_item}>
          <span className={css.statistics_title}>Good:{good}</span>
        </li>
        <li className={css.statistics_item}>
          <span className={css.statistics_title}>Bad:{bad}</span>
        </li>
        <li className={css.statistics_item}>
          <span className={css.statistics_title}>Neutral:{neutral}</span>
        </li>
        <li className={css.statistics_item}>
          <span className={css.statistics_title}>Total:{total}</span>
        </li>
        <li className={css.statistics_item}>
          <span className={css.statistics_title}>Positive:{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;