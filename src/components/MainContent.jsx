import Home from './Home';
import About from './About';
import Assistant from './Assistant';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MainContent = ({
  content,
  lang,
  ingredients,
  handleIngredientDelete,
  handleIngredientsInputKeyUp,
  handleIngredientsInputBlur,
  handleButton,
}) => {
  const displayContent = (content) => {
    let newContent = content;
    switch (content) {
      case 'home':
        newContent = <Home lang={lang} handleButton={handleButton} />;
        break;
      case 'about':
        newContent = <About lang={lang} />;
        break;
      case 'assistant':
        newContent = (
          <Assistant
            lang={lang}
            ingredients={ingredients}
            handleIngredientDelete={handleIngredientDelete}
            handleIngredientsInputKeyUp={handleIngredientsInputKeyUp}
            handleIngredientsInputBlur={handleIngredientsInputBlur}
          />
        );
        break;
      default:
        newContent = <Home lang={lang} handleButton={handleButton} />;
        break;
    }
    return newContent;
  };
  return (
    <Container className="p-3 mt-3 contentspace">
      <div className="">{displayContent(content)}</div>
    </Container>
  );
};
MainContent.propTypes = {
  content: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  handleIngredientDelete: PropTypes.func.isRequired,
  handleIngredientsInputKeyUp: PropTypes.func.isRequired,
  handleIngredientsInputBlur: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default MainContent;
