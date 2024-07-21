import Home from './Home';
import About from './About';
import Assistant from './Assistant';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const MainContent = ({
  content,
  lang,
  ingredients,
  handleIngredientDelete,
  handleIngredientsInputKeyUp,
  handleIngredientsInputBlur,
  handleButton,
}) => {
  const indices = {
    home: 0,
    assistant: 1,
    about: 2,
  };
  return (
    <Carousel indicators={false} interval={null} controls={false} activeIndex={indices[content]}>
      <Carousel.Item>
        <Container className="p-3 mt-3 contentspace">
          <Home lang={lang} handleButton={handleButton} />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="p-3 mt-3 contentspace">
          <Assistant
            lang={lang}
            ingredients={ingredients}
            handleIngredientDelete={handleIngredientDelete}
            handleIngredientsInputKeyUp={handleIngredientsInputKeyUp}
            handleIngredientsInputBlur={handleIngredientsInputBlur}
          />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="p-3 mt-3 contentspace">
          <About lang={lang} />
        </Container>
      </Carousel.Item>
    </Carousel>
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
