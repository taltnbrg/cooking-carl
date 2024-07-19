import IngredientDisplay from './IngredientsDisplay.jsx';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import text from '../assets/text.js';
import PropTypes from 'prop-types';

const IngredientsInput = ({ ingredients, handleIngredientDelete, handleKeyUp, handleBlur, lang }) => {
  const selectedLang = lang || 'en';
  return (
    <div>
      <InputGroup className="pt-1" onSubmit={(e) => e.preventDefault()} onKeyUp={handleKeyUp} onBlur={handleBlur}>
        <InputGroup.Text size="sm" className="rounded text-small" id="ingredient-input-label">
          {text.enter_ingredient[selectedLang]}
        </InputGroup.Text>
        <Form.Control
          type="text"
          onSubmitCapture={(e) => e.preventDefault()}
          placeholder={
            // ingredients.filter(i=>i.trim()!="").length == 0 ? text.example_ingredient_placeholder[selectedLang] : ""
            text.example_ingredient_placeholder[selectedLang]
          }
          aria-label="ingredient"
          className="custom-text-input-placeholder custom-text-input-focus rounded mb-1"
        />
        <Button className="rounded" variant="success" type="submit">
          {text.add[selectedLang]}
        </Button>
      </InputGroup>
      <IngredientDisplay ingredients={ingredients} handleDelete={handleIngredientDelete} />
      <div className="d-grid gap-2">
        <OverlayTrigger
          overlay={
            <Tooltip hidden={ingredients.length > 3} id="tooltip-disabled">
              Add at least 3 ingredients
            </Tooltip>
          }
        >
          <span className="d-grid">
            <Button disabled={ingredients.length < 3} className="rounded" variant="success" type="submit">
              {text.chat_get_recipes[selectedLang]}
            </Button>
          </span>
        </OverlayTrigger>
      </div>
    </div>
  );
};

IngredientsInput.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string), // Adjust according to the expected shape of ingredients
  handleIngredientDelete: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

export default IngredientsInput;
