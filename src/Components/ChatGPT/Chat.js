import React from 'react';
import './Chat.css'; // Import the CSS file for styling

const Chat = () => {
  return (
    <div className="ai-warning">
      <h2>The Dangers of Artificial Intelligence</h2>
      <p>
        Artificial Intelligence (AI) has brought numerous advancements and innovations to various industries,
        but it also comes with its fair share of dangers that need to be addressed.
      </p>
      <h3>Risk of Job Displacement</h3>
      <p>
        One major concern is the potential displacement of jobs due to automation powered by AI. As AI continues
        to improve and become more capable, it could replace many human workers, leading to widespread unemployment
        and economic disruption.
      </p>
      <h3>Privacy and Security Issues</h3>
      <p>
        AI relies heavily on vast amounts of data, raising concerns about privacy and security. The collection,
        storage, and analysis of personal data by AI systems can pose risks if not properly safeguarded. Unauthorized
        access to AI systems could have severe consequences for individuals and society as a whole.
      </p>
      <h3>Algorithmic Bias</h3>
      <p>
        AI algorithms are trained on historical data, which means they can inherit biases present in the data. This
        can lead to discriminatory practices, perpetuating existing societal inequalities. It's crucial to develop
        AI systems that are fair, transparent, and accountable to avoid reinforcing or exacerbating such biases.
      </p>
      <h3>Ethical Concerns</h3>
      <p>
        The development and deployment of AI raise ethical dilemmas. For example, autonomous vehicles programmed to
        make split-second decisions during accidents need to navigate moral and ethical choices. Balancing human
        values and machine decision-making is a complex task that requires careful consideration.
      </p>
    </div>
  );
};

export default Chat;