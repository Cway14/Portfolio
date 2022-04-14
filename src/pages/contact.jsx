import React, { useEffect, useRef } from 'react';

import Layout from '../components/layout';
import '../styles/contactPage.css';

function ContactPage() {
  const inputEl = useRef(null);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [answers, setAnswers] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const sendContactTest = async (body) => {
    setLoading(true);
    const result = fetch('https://api.camway.ca', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await result;
    result.then((res) => {
      setLoading(false);
      console.log('success');
    });
    result.catch((err) => {
      setLoading(false);
      console.log('error');
    });

    setLoading(false);
  };

  const incrementQuestion = () => {
    const current = document.getElementById(`question-${currentQuestion}`);
    current?.classList.remove('current-question');
    current?.classList.add('slideToTop');

    const next = document.getElementById(`question-${currentQuestion + 1}`);
    next?.classList.remove('hidden');
    next?.classList.add('slideFromBottom');
    setCurrentQuestion(currentQuestion + 1);
  };

  const startForm = (e) => {
    e.preventDefault();
    incrementQuestion();
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      incrementQuestion();
    }
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Layout>
      <form className="contact-form">
        {/* Start Form or Visit LinkedIn */}
        <div className="current-question" id="question-0">
          <h2>Contact</h2>
          <p>
            You can reach me through my LinkedIn, Instagram, or my contact form.
          </p>
          <button
            title="Start contact form"
            type="button"
            className="contact-start-form"
            onClick={(e) => startForm(e)}
          >
            Contact me!
          </button>
        </div>
        {/* Question */}
        <div className="hidden question" id="question-1">
          <h3 className="contact-question">What is your name?</h3>
          <input
            type="text"
            className="contact-input"
            ref={inputEl}
            placeholder="Type your answer here..."
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) =>
              setAnswers({ ...answers, firstName: e.target.value })
            }
          />
        </div>

        {/* Question */}
        <div className="hidden question" id="question-2">
          <h3 className="contact-question">What is your email?</h3>
          <input
            type="email"
            className="contact-input"
            placeholder="Type your answer here..."
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
          />
        </div>

        {/* Question */}
        <div className="hidden question" id="question-3">
          <h3 className="contact-question">What did you want to say?</h3>
          <textarea
            type="text"
            className="contact-input"
            placeholder="Type your answer here..."
            onChange={(e) =>
              setAnswers({ ...answers, message: e.target.value })
            }
          />
          <button
            className="submit-contact"
            type="button"
            onClick={() => sendContactTest(answers)}
          >
            Send Message
          </button>
        </div>
        <div>{loading ? 'loading' : 'not loading'}</div>
      </form>
    </Layout>
  );
}

export default ContactPage;
