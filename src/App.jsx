import './App.css';
import axios from 'axios';
import Form from './component/Form';
import { useState } from 'react';
import { franc } from 'franc';
import langs from 'langs';

function App() {
  const [translatingText, setTranslatingText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // Language State

  const [translatingLang, setTranslatingLang] = useState('en');
  const [translatedLang, setTranslatedLang] = useState('fr');
  const [detectLang, SetDetectLang] = useState(false);

  function handleTranslateChange(event) {
    const { value } = event.target;
    setTranslatingText(value);
  }

  function handleTranslatingLang(value) {
    setTranslatingLang(value);
    SetDetectLang(false);
  }

  function handleTranslatedLang(value) {
    setTranslatedLang(value);
  }

  function handleDetectLang() {
    SetDetectLang(true);
  }

  async function handleTranslate() {
    if (detectLang) {
      const langCode = franc(translatingText, { minLength: 2 });
      const languageName = langs.where('3', langCode)?.['1'] || 'Unknown';
      setTranslatingLang(languageName);
    }
    try {
      setTranslatedText('Translating...');
      const res = await axios.get(
        `https://api.mymemory.translated.net/get?q=${translatingText}&langpair=${translatingLang}|${translatedLang}`
      );
      const data = res.data;

      setTranslatedText(
        data.responseData.translatedText || data.matches[0].translation
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="my-10">
        <Form
          handleTranslate={handleTranslate}
          handleTranslateChange={handleTranslateChange}
          translatingValue={translatingText}
          translatedText={translatedText}
          handleTranslatingLang={handleTranslatingLang}
          handleTranslatedLang={handleTranslatedLang}
          handleDetectLang={handleDetectLang}
          translatingLang={translatingLang}
          translatedLang={translatedLang}
          detectLang={detectLang}
        />
      </div>
    </>
  );
}

export default App;
