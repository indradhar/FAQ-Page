import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Are you a Btech Student and looking for internship?',
      answer: 'You can build your projects and apply for internships!',
      open: true
    },
    {
      question: 'Do you want to visit some awesome btech projects',
      answer: 'You can visit github',
      open: false
    },
    {
      question: 'How to create a production build?',
      answer: 'use npm run build',
      open: false
    },
    {
      question: 'How to create a react App?',
      answer: 'use create-react-app app-name',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
