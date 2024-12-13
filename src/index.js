import { DisplayContent } from './assets/displayContent.js';
console.log('Hello World!');
const main_content = document.querySelector('#content');

const nav_buttons = document.querySelectorAll('.page-shift')


document.addEventListener('DOMContentLoaded', () => {
    DisplayContent.defaultContent(main_content)
})
nav_buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log('clicked')
        switch (e.target.id) {
            case "home":
                DisplayContent.defaultContent(main_content)
                break
            case "menu":
                DisplayContent.menuContent(main_content)
                break
            case "about":
                DisplayContent.aboutContent(main_content)
                break
            default:
                DisplayContent.defaultContent(main_content)
                break
        }
    })
});