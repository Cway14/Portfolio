import React from 'react';

const contactForm = () => {
  const [contact, setContact] = React.useState({});

  const isValidContact = () => {
    return contact.firstName && contact.email && contact.message;
  };

  const sendContact = (e) => {
    e.preventDefault();
    if (!isValidContact()) return;

    fetch('https://api.camway.ca', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <form
      className="flex flex-direction-column contact-form"
      onSubmit={sendContact}
    >
      <label>Name</label>
      <input
        type="text"
        value={contact?.firstName}
        onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        autoComplete="on"
        value={contact?.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <label>Message</label>
      <textarea
        type="text"
        value={contact?.message}
        onChange={(e) => setContact({ ...contact, message: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default contactForm;
