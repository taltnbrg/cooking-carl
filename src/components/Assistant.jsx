import IngredientsInput from './IngredientsInput';
import AssistantIntroduction from './AssistantIntroduction.jsx';
import PropTypes from 'prop-types';

const Assistant = ({
  lang,
  ingredients,
  handleIngredientDelete,
  handleIngredientsInputKeyUp,
  handleIngredientsInputBlur,
}) => {
  return (
    <>
      <AssistantIntroduction lang={lang} />
      <IngredientsInput
        lang={lang}
        ingredients={ingredients}
        handleIngredientDelete={handleIngredientDelete}
        handleKeyUp={handleIngredientsInputKeyUp}
        handleBlur={handleIngredientsInputBlur}
      />
    </>
  );
};

Assistant.propTypes = {
  lang: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  handleIngredientDelete: PropTypes.func.isRequired,
  handleIngredientsInputKeyUp: PropTypes.func.isRequired,
  handleIngredientsInputBlur: PropTypes.func.isRequired,
};

export default Assistant;
