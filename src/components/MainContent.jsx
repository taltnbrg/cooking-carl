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
    <Container className="p-3 mt-3 contentspace">
      <div className="">
        <Carousel crossfade indicators={false} interval={null} controls={false} activeIndex={indices[content]}>
          <Carousel.Item>
            <Home lang={lang} handleButton={handleButton} />
          </Carousel.Item>
          <Carousel.Item>
            <Assistant
              lang={lang}
              ingredients={ingredients}
              handleIngredientDelete={handleIngredientDelete}
              handleIngredientsInputKeyUp={handleIngredientsInputKeyUp}
              handleIngredientsInputBlur={handleIngredientsInputBlur}
            />
          </Carousel.Item>
          <Carousel.Item>
            <About lang={lang} />
          </Carousel.Item>
        </Carousel>
      </div>
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
