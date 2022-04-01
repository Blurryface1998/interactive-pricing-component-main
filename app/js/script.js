let slider, sliderfills, thumb, slidervalue;
let initalValue = [8, 12, 16, 24, 36];

document.addEventListener("DOMContentLoaded", (e) => {init();});

function init() {
    slider = document.querySelector("#range");
    sliderfills = document.querySelector(".range__background");
    thumb = document.querySelector(".range__thumb");
    slidervalue = document.querySelector('value');

    
        slider.addEventListener("input", (e) => {
            updateSlider(slider.value);
        });
        slider.addEventListener("change", (e) => {
            updateSlider(slider.value);
        });
        slider.value = initalValue;

        updateSlider(slider.value);
    }

function updateSlider(fill, val) {
    setThumbText(slidervalue, val);
    setSliderFill(sliderfills);
}

function setThumbText(elem, val) {
    
}



function setSliderFill(elem) {
    let fillColor = getComputedStyle(elem).getPropertyValue("--strongCyan-SliderBackround");
    elem.style.BackgroundColor = fillColor;
}