import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactRow from './components/ContactRow';

function App() {
  const initialContacts = contacts.slice(0, 5);
  const [displayedContacts, setDisplayedContacts] = useState(initialContacts);
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
  
    const isAlreadyDisplayed = displayedContacts.some((contact) => contact.id === randomContact.id);
    if (isAlreadyDisplayed) {
      addRandomContact();
      return;
    }

    setDisplayedContacts(prevContacts => [...prevContacts, randomContact]);

    const updatedRemainingContacts = remainingContacts.filter(contact => contact.id !== randomContact.id);
    setRemainingContacts(updatedRemainingContacts);
  }
  

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setDisplayedContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setDisplayedContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = displayedContacts.filter((contact) => contact.id !== id);
    setDisplayedContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br />Oscar</th>
            <th>Won<br />Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} onDelete={deleteContact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
