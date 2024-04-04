import React, { useState } from 'react';
import './chatbot.css'
const ChatBot = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Simulate a response from the chatbot after 1 second
      setTimeout(() => {
        setMessages([...messages, { text: 'This is a response from the chatbot.', sender: 'bot' }]);
      }, 1000);
    }
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };


  return (
    <>
      <div className="chatbot-icon" onClick={handleIconClick}>
      
      </div>
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chatbot</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}>X</button>
              </div>
              <div className="modal-body">
                <div className="chatbot-messages">
<div className='category'>
<select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">orders</option>
        <option value="option2">Account Details</option>
        <option value="option3">Payment issues</option>
    
      </select>
</div>

                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'bot' ? 'text-end' : 'text-start'}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="chatbot-input mt-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Type your message here..."
                  />
                  <button onClick={handleSendMessage} className="btn btn-primary ">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
