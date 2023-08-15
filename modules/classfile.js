export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static booksData = [];

  static addBook = () => {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();

    if (title && author) {
      const newbook = new Book(title, author);
      this.booksData.push(newbook);
    }
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  static setToLocal = () => {
    localStorage.setItem('bookCollection', JSON.stringify(this.booksData));
  }

  static getFromLocal = () => {
    const getData = localStorage.getItem('bookCollection');
    if (getData) {
      this.booksData = JSON.parse(getData);
    }
  }

  static createDynamicBooks = () => {
    this.getFromLocal();
    listContainer.innerHTML = '';
    this.booksData.forEach((book, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('parent-list');

      const contentContainer = document.createElement('div');
      contentContainer.classList.add('content-container');

      const titleContainer = document.createElement('div');
      titleContainer.classList.add('title-container');
      contentContainer.appendChild(titleContainer);

      const bookName = document.createElement('h2');
      bookName.classList.add('book-name');
      bookName.textContent = `"${book.title}" by`;
      titleContainer.appendChild(bookName);

      const authorContainer = document.createElement('div');
      authorContainer.classList.add('author-container');
      contentContainer.appendChild(authorContainer);

      const authorName = document.createElement('p');
      authorName.classList.add('author-name');
      authorName.textContent = book.author;
      authorContainer.appendChild(authorName);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-container');

      const removeBTN = document.createElement('button');
      removeBTN.textContent = 'Remove';
      removeBTN.classList.add('remove-btn');
      removeBTN.addEventListener('click', () => {
        this.booksData = this.booksData.filter((book, i) => i !== index);
        this.setToLocal();
        this.createDynamicBooks();
      });
      btnContainer.appendChild(removeBTN);

      listItem.appendChild(contentContainer);
      listItem.appendChild(btnContainer);

      listContainer.appendChild(listItem);
    });
  }

  static showList = () => {
    bookList.style.display = 'flex';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
  }

  static showForm = () => {
    bookList.style.display = 'none';
    addNewSection.style.display = 'flex';
    contactSection.style.display = 'none';
  }

  static showContact = () => {
    bookList.style.display = 'none';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'flex';
  }
}