import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];
  const content = document.getElementById('main-content');

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
        <img src="./img/logo.svg" class="logo"/>
        ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault(); 
  
        const { id } = event.target
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  

  const showBooks = () => {
    const books  = bookstore1.getBooks;
    let list = "";
    content.innerHTML = "";
    books.forEach((element) => {
      list += `<li>${element.title}</li>
      <li>${element.author}</li>
      <li>${element.price}</li>
      <li>${element.stock}</li>
      <li>${element.year}</li>`
    });
    content.insertAdjacentHTML(
      'afterbegin',
      `<ul>${list}</ul>`
    )
  }
  
  const showComics = () => {
    const comics  = bookstore1.getComics;
    let list = "";
    content.innerHTML = "";
    comics.forEach((element) => {
      list += `<li>${element.title}</li>
      <li>${element.author}</li>
      <li>${element.price}</li>
      <li>${element.stock}</li>
      <li>${element.year}</li>
      <li>${element.illustrator}</li>
      <li>${element.publisher}</li>
      <li>${element.volume}</li>`
    });
    content.insertAdjacentHTML(
      'afterbegin',
      `<ul>${list}</ul>`
    )
  }
  
  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = Number(prompt('Price'));
    const stock = Number(prompt('Stock'));
    const year = Number(prompt('Year'));
    if(!title || !author || !price || !stock || !year){
      alert("Incorrect value, try again!"); 
    }
    const book = new Book(title, author, price, stock, year);

    bookstore1.getBooks.forEach( (names) => {
      if(title === names.title){
        alert("This book already exists");
      } 
    });

    bookstore1.setBooks = book.getInfo();
  }
  
  const addComics = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = Number(prompt('Price'));
    const stock = Number(prompt('Stock'));
    const year = Number(prompt('Year'));
    const illustrator = prompt('Illustrator');
    const publisher = prompt('Publisher');
    const volume = Number(prompt('Volume'));
    if(!title || !author || !price || !stock || !year || !illustrator || !publisher || !volume){
      alert("Incorrect value, try again!"); 
    }
    const comic = new Comic(title, author, price, stock, year, illustrator, publisher, volume);

    bookstore1.getComics.forEach( (names) => {
      if(title === names.title){
        alert("This comic already exists");
      } 
    });
    bookstore1.setComics = comic.getInfo();
  }
  
  initialize();
})();


//Trabajo con ayuda de Jason Aguilar