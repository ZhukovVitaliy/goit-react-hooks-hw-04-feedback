// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, i) => {
        const titleBtn = option[0].toUpperCase() + option.substring(1);

        return (
          <button key={i} name={option} type="button" onClick={onLeaveFeedback}>
            {titleBtn}
          </button>
        );
      })}
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.exact({
//       // option[0]: PropTypes.array.isRequired,
//       option: PropTypes.string.isRequired,
//     })
//   ),
// };
