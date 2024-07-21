import text from '../assets/text';
import PropTypes from 'prop-types';

const Home = ({ lang, handleButton }) => {
  const selectedLang = lang || 'en';
  return (
    <>
      <h1>{text.home_intro_heading[selectedLang]}</h1>
      <p className="ps-0 lead">{text.home_intro_text[selectedLang]}</p>
      <a href="#chat" onClick={handleButton} className="btn btn-success">
        {text.home_intro_button[selectedLang]}
      </a>
    </>
  );
};

Home.propTypes = {
  lang: PropTypes.string,
  handleButton: PropTypes.func.isRequired,
};

export default Home;
