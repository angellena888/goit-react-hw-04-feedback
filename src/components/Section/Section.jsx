import css from './section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.feedback_text}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
