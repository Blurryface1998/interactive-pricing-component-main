const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const selectorValue = document.getElementById("selectorValue");
const progressBar = document.getElementById("progressBar");
const yearlyB = document.getElementById("yearlyB");
const monthlyB = document.getElementById("monthlyB");
const views = document.getElementById("views");
const radioBG = document.getElementById("bg");
const radioBtn = document.querySelectorAll("input[type=radio]");
let yearState = true;


/* Slider Button Position on input */
slider.addEventListener("input", () => {
    selector.style.left = slider.value + "%";
    setPrice();
}); 

/* Setting Price on Input range moving and Background width change */
function setPrice() {
    let value = parseInt(slider.value);
    switch(value) {
        case 1:
            views.innerHTML = "10K pageviews";
            selectorValue.innerHTML = getPrice(yearState, value, 8);
            progressBar.style.width = 1 + "%";
            break;
        case 2:
            views.innerHTML = "50K pageviews";
            selectorValue.innerHTML = getPrice(yearState, value, 12);
            progressBar.style.width = 25 + "%";
            break;
        case 3:
            views.innerHTML = "100K pageviews";
            selectorValue.innerHTML = getPrice(yearState, value, 16);
            progressBar.style.width = 50 + "%";
            break;
        case 4:
            views.innerHTML = "500k pageviews";
            selectorValue.innerHTML = getPrice(yearState, value, 24);
            progressBar.style.width = 75 + "%";
            break;
        case 5:
            views.innerHTML = "1M pageviews";
            selectorValue.innerHTML = getPrice(yearState, value, 36);
            progressBar.style.width = 100 + "%";
            break;
        default:
            break;  
    }
}

function getPrice(state, value, price) {
    let newPrice;
    
    if(state) {
        switch(value) {
            case 1:
                newPrice = "$".concat(price, ".00");
                break;
            case 2:
                newPrice = "$".concat(price, ".00");
                break;
            case 3:
                newPrice = "$".concat(price, ".00");
                break;
            case 4:
                newPrice = "$".concat(price, ".00");
                break;
            case 5:
                newPrice = "$".concat(price, ".00");
                break;
            default:
                break;
        }
    }

    else if(!state) {
        switch(value) {
            case 1:
                newPrice = getDiscount(price);
                break;
            case 2:
                newPrice = getDiscount(price);
                break;
            case 3:
                newPrice = getDiscount(price);
                break;
            case 4:
                newPrice = getDiscount(price);
                break;
            case 5:
                newPrice = getDiscount(price);
                break;
            default:
                break;
        }
    }
    return newPrice;
}

/* Getting Discount of 25% when you click on the Yearly Radio Button */
function getDiscount(price) {
    let money = price * 0.25;
    return "$".concat(money, ".00");

}

for(let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("change", (e) => {

        if(radioBtn[i] == yearlyB) {
            radioBG.classList.add("active");
            yearState = false;
            setPrice();
        } 
        
        else if(radioBG.classList.contains("active") === true) {
            radioBG.classList.remove("active");
            yearState = true;
            setPrice();
        }
        e.preventDefault();
    });
    
}