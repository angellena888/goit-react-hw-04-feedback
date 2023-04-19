import PropTypes from 'prop-types';
import css from './feedback.module.css';

function  FeedbackOptions ({options, onLeaveFeedback}){
    return(
        <div className={css.button_item}>
       {options.map((item) => {
            return (
                <li className={css.button_list} key={item}>
                    <button className={css.button} name={item} onClick={onLeaveFeedback}>{item}</button>
                </li>
            )
       })}
       
        </div>
    )   
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;