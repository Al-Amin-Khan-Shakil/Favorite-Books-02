import Book from './modules/classfile.js';
import {
  addBTN, dateHolder, list, addNewBtn, contactInfo,
} from './modules/variables.js';
import { DateTime } from './modules/luxon.js';

addBTN.addEventListener('click', (e) => {
  e.preventDefault();
  Book.addBook();
  Book.setToLocal();
  Book.createDynamicBooks();
});

setInterval(() => {
  const localTime = DateTime.now();
  const DHMSformat = localTime.toFormat('yyyy-MM-dd HH:mm:ss z');
  dateHolder.textContent = DHMSformat;
}, 1000);
list.addEventListener('click', Book.showList);
addNewBtn.addEventListener('click', Book.showForm);
contactInfo.addEventListener('click', Book.showContact);

window.addEventListener('load', Book.createDynamicBooks());