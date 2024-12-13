import resturant from './images/resturant.jpg'
import dish1 from "./images/salad1.jpg"
import dish2 from "./images/salad2.jpg"
import dish3 from "./images/salad3.jpg"
export const DisplayContent = (() => {
  const defaultContent = (content_container) => {
    content_container.innerHTML = ''
    const main = main_content()
    const section = menu_options()
    content_container.append(main)
    content_container.append(section)
  }

  const menuContent = (content_container) => {
    content_container.innerHTML = ''
    const main = menu_content()
    content_container.append(main)
  }
  const aboutContent = (content_container) => {
    content_container.innerHTML = ''
    const main = about_content()
    content_container.append(main)
  }
  const main_content = () => {
    const main = document.createElement('div')
    main.classList.add('main')
    main.innerHTML = `<img src="${resturant}" alt="family centric" />
        <div class="intro-text">
          <h4>New Menu</h4>
          <h1 class="main_text">Now serving Winter</h1>
          <button>Order now &RightArrow;</button>
        </div>`
    return main
  }
  const menu_options = () => {
    const main = document.createElement('div')
    main.classList.add('options')
    main.innerHTML = `<ul class="menu-categories">
          <li class="active" tabindex="0">Salads</li>
          <li tabindex="0">Warm Bowls</li>
          <li tabindex="0">Sides</li>
        </ul>
        <div class="menu-container">
          <div class="menu-items">
            <div class="option">
              <div class="dish-image">
                <img src="${dish1}" />
                <div class="tag">Popular</div>
              </div>
              <h3 class="dish-name">Kale Ceasar</h3>
              <p class="dish-discription">
                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,
                chopped romaine, lime squeezes and cesear dressing
              </p>
              <a href="#" class="order-link">Order now &rightarrow;</a>
            </div>
            <div class="option">
              <div class="dish-image">
                <img src="${dish2}" />
                <div class="tag">Popular</div>
              </div>
              <h3 class="dish-name">Kale Ceasar</h3>
              <p class="dish-discription">
                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,
                chopped romaine, lime squeezes and cesear dressing
              </p>
              <a href="#" class="order-link">Order now &rightarrow;</a>
            </div>
            <div class="option">
              <div class="dish-image">
                <img src="${dish3}" />
                <div class="tag">Popular</div>
              </div>
              <h3 class="dish-name">Kale Ceasar</h3>
              <p class="dish-discription">
                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,
                chopped romaine, lime squeezes and cesear dressing
              </p>
              <a href="#" class="order-link">Order now &rightarrow;</a>
            </div>
          </div>
        </div>`
    return main
  }

  const menu_content = () => {
    const main = document.createElement('div')
    main.classList.add('resturant-menu-container')
    main.innerHTML = `<div class="resturant-menu">
          <table>
            <tr>
              <th>no</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Burger and Fries</td>
              <td>$12</td>
            </tr>
          </table>
        </div>`

    return main
  }
  const about_content = () => {
    const main = document.createElement('div')
    main.innerHTML = `<h1>I really can't think of a way to apply this</h1>
        <p>... hmmm since i can't use lorem in script, this is going to be a very short about section</p>`
    return main
  }
  return { defaultContent, menuContent, aboutContent }
})()