import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './styles/custom_styles.scss';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [content, setContent] = useState('home');
  const [lang, setLang] = useState('en');
  const handleIngredientsInputKeyUp = (e) => {
    const value = e.target.value.toString().trim();

    if (value === '') return;

    if (e.key === 'Enter') {
      e.preventDefault();
      handleIngredientsInsert(value);
      e.target.value = '';
    }
    return;
  };

  const handleIngredientsInputBlur = (e) => {
    const value = e.target.value.toString();
    if (value.trim() === '') return;
    handleIngredientsInsert(value);
    e.target.value = '';
  };

  const handleIngredientsInsert = (newValue) => {
    const newIngredients = [...ingredients];
    if (newIngredients.includes(newValue)) return;
    newIngredients.push(newValue);
    setIngredients(newIngredients);
  };

  const handleIngredientDeleteByValue = (event) => {
    const deleteValue = event.target.dataset.value;
    const newIngredients = ingredients.filter((value) => value !== deleteValue);
    setIngredients(newIngredients);
  };

  const handleHome = () => {
    setContent('home');
  };
  const handleAbout = () => {
    setContent('about');
  };
  const handleAssistant = () => {
    setContent('assistant');
  };

  return (
    <div>
      <Header handleHome={handleHome} handleAbout={handleAbout} handleAssistant={handleAssistant} />
      <div>
        <MainContent
          content={content}
          lang={lang}
          ingredients={ingredients}
          handleIngredientDelete={handleIngredientDeleteByValue}
          handleIngredientsInputKeyUp={handleIngredientsInputKeyUp}
          handleIngredientsInputBlur={handleIngredientsInputBlur}
          handleButton={handleAssistant}
        />
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default App;
