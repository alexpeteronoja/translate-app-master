function Form(props) {
  function handleCopy(value) {
    navigator.clipboard.writeText(value);
  }

  function handleSpeech(value) {
    const utterance = new SpeechSynthesisUtterance(value);
    utterance.lang = props.translatingLang;
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div>
        <div className="flex justify-center mb-5">
          <img src="images/logo.svg" alt="" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="box p-7 rounded-2xl">
            <form action="">
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                <div
                  onClick={props.handleDetectLang}
                  className={`cursor-pointer  px-3 py-1.5 ${props.detectLang ? 'active' : ''}`}
                >
                  Detect Language
                </div>
                <div
                  onClick={() => props.handleTranslatingLang('en')}
                  className={`cursor-pointer px-3 py-1.5 ${props.translatingLang === 'en' && !props.detectLang ? 'active' : ''}`}
                >
                  English
                </div>
                <div
                  onClick={() => props.handleTranslatingLang('fr')}
                  className={`cursor-pointer  px-3 py-1.5 ${props.translatingLang === 'fr' && !props.detectLang ? 'active' : ''}`}
                >
                  French
                </div>
                <div
                  onClick={() => props.handleTranslatingLang('es')}
                  className={`cursor-pointer  px-3 py-1.5 ${props.translatingLang === 'es' && !props.detectLang ? 'active' : ''}`}
                >
                  Spanish
                </div>
              </div>

              <hr />

              <textarea
                onChange={props.handleTranslateChange}
                className="py-5 px-1 translating-text"
                name=""
                id=""
                value={props.translatingValue}
                maxLength={500}
              ></textarea>
              <div className="mt-2 mb-4 text-right translating-length">{`${props.translatingValue.length}/500`}</div>

              <div className="flex justify-between">
                <div className="grid grid-cols-2 gap-3 ">
                  <img
                    onClick={() => handleSpeech(props.translatingValue)}
                    className="btn-style"
                    src="images/sound_max_fill.svg"
                    alt="Sound Symbol"
                  />
                  <img
                    onClick={() => handleCopy(props.translatingValue)}
                    className="btn-style"
                    src="images/Copy.svg"
                    alt="Copy symbol"
                  />
                </div>

                <div>
                  <button
                    onClick={props.handleTranslate}
                    className="translate-btn py-2 px-4 rounded-xl"
                    type="button"
                  >
                    <span className="flex gap-x-3">
                      <span>
                        <img src="images/Sort_alfa.svg" alt="Sound Symbol" />
                      </span>
                      <span>Translate</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Second Box */}

          <div className="box p-7 rounded-2xl">
            <form action="">
              <div className="flex gap-x-4 gap-y-2 mb-3">
                <div
                  onClick={() => props.handleTranslatedLang('en')}
                  className={`cursor-pointer px-3 py-1.5 ${props.translatedLang === 'en' ? 'active' : ''}`}
                >
                  English
                </div>

                <div
                  onClick={() => props.handleTranslatedLang('fr')}
                  className={`cursor-pointer px-3 py-1.5 ${props.translatedLang === 'fr' ? 'active' : ''}`}
                >
                  French
                </div>

                <div
                  onClick={() => props.handleTranslatedLang('es')}
                  className={`cursor-pointer px-3 py-1.5 ${props.translatedLang === 'es' ? 'active' : ''}`}
                >
                  Spanish
                </div>
              </div>

              <hr />

              <textarea
                disabled
                className="py-5 px-1 translated-text"
                name=""
                id=""
                value={props.translatedText}
              ></textarea>

              <div className="flex gap-x-2">
                <img
                  onClick={() => handleSpeech(props.translatedText)}
                  className="btn-style"
                  src="images/sound_max_fill.svg"
                  alt="Sound Symbol"
                />
                <img
                  onClick={() => handleCopy(props.translatedText)}
                  className="btn-style"
                  src="images/Copy.svg"
                  alt="Copy symbol"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
