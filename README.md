# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](images/screenshot.jpg)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/flexbox-css-grid-javascript-Hyw2uWA7q)
- Live Site URL: (https://blurryface1998.github.io/interactive-pricing-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- Scss

### What I learned

In this project, I learned how to style input range element using CSS and JavaScript.

```html
 <input type="range" name="range" width="100" min="1" max="5" value="3" step="1" id="slider">
    <div class="range__selector" id="selector">
        <div class="range__selector--btn"></div>
    </div>
    <div id="progressBar" class="range__background"></div>
    </div>
```
```css
    .range__background {
        width: 50%;
        height: rem(15);
        background-color: var(--strongCyan-SliderBackround);
        border-radius: rem(20);
        position: absolute;
        top: 1px;
        left: 0;
        pointer-events: none;
    }
```
```js
slider.addEventListener("input", () => {
    selector.style.left = slider.value + "%";
}); 
```
### Continued development

I need to work more on cross-platform accessibility.

## Author

- Website - [Djordje Rajc]
- Frontend Mentor - [@Blurryface1998](https://www.frontendmentor.io/profile/Blurryface1998)
- Twitter - [@Blurryface_1998](https://twitter.com/Blurryface_1998)