import React, { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  console.log(contacts)
  const [newContact, setNewContact] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', phone: '', email: '' });
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Adres Defteri</h1>
      <div><input type='search' />
    <button>
      kişi ara
    </button></div>
    
      <input
        type="text"
        name="name"
        placeholder="İsim"
        value={newContact.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Telefon"
        value={newContact.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-posta"
        value={newContact.email}
        onChange={handleChange}
      />
      <button onClick={addContact}>Kişi Ekle</button>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone} - {contact.email}
            <button onClick={() => deleteContact(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
