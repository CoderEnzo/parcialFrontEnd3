import { useState } from 'react';
import Card from './Card';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState(null); 
  const [bookCount, setBookCount] = useState(0); 
  const [bookList, setBookList] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookList.some(book => book.title === title && book.author === author)) {
      setErrorMessage("Ya leiste este libro, no vale leerlo de nuevo!");
      return;
    }
    if (title.trim().length < 3 || title.trim().startsWith(' ') || author.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false); 
    } else {
      setShowCard(true);
      setCardData({ title, author }); 
      setBookList([...bookList, { title, author }]); 
      setBookCount(bookCount + 1);
      setErrorMessage('');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'author') {
      setAuthor(e.target.value);
    }
  };

  return (
    <div>
      <h2>Formulario de Libros Leidos</h2>
      <p>📚Número de libros Leidos: {bookCount}📚</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título del Libro:</label><br />
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="author">Autor:</label><br />
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <Card title={cardData.title} author={cardData.author} />} 
    </div>
  );
}

export default Form;