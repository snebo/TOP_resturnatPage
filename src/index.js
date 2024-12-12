import { DisplayContent } from './assets/displayContent.js';
console.log('Hello World!');
const main_content = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', () => {
    DisplayContent.menuContent(main_content)
})