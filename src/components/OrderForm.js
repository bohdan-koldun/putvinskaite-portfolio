import * as React from 'react';

const OrderForm = ({ serviceName, onClose, onSubmit }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceName, name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      alert(`Дякуємо, ${name}! Ваше замовлення на ${serviceName} отримано. Ми зв'яжемося з Вами найближчим часом.`);
      onSubmit({ serviceName, name, email, message });
      onClose(); // Close form after submission
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setStatus('error');
      alert('На жаль, сталася помилка. Спробуйте, будь ласка, пізніше.');
    }
  };

  const formStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    zIndex: 1000, // Ensure it's on top
    width: '90%',
    maxWidth: '500px',
    color: '#333', // Text color for the form content
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999, // Below the form, but above other content
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1em',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px',
  }

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 'var(--border-radius, 4px)',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'var(--color-primary, #4A4A4A)',
    color: '#fff',
  };

  const closeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#eee',
    color: '#333',
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={formStyle}>
        <h3 style={{ marginTop: 0, marginBottom: '20px', textAlign: 'center' }}>Замовлення: {serviceName}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={{display: 'block', marginBottom: '5px'}}>Ім'я:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} required />
          </div>
          <div>
            <label htmlFor="email" style={{display: 'block', marginBottom: '5px'}}>Електронна пошта:</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} required />
          </div>
          <div>
            <label htmlFor="message" style={{display: 'block', marginBottom: '5px'}}>Повідомлення (необов'язково):</label>
            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} style={textareaStyle} />
          </div>
          <div style={buttonContainerStyle}>
            <button type="button" onClick={onClose} style={closeButtonStyle} disabled={status === 'sending'}>Закрити</button>
            <button type="submit" style={submitButtonStyle} disabled={status === 'sending'}>
              {status === 'sending' ? 'Надсилається...' : 'Надіслати запит'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm; 