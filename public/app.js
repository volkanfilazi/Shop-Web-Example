
const mainListContainer = document.querySelector('.menu-list-main')
const searchInput = document.querySelector('.search-input')
const basket = document.querySelector('.basket')
const closeSlide = document.querySelector('.close-button')
const basketContainer = document.querySelector('.basket-container')
const slide = document.querySelector('.slide')
const slideContainer = document.querySelector('.slide-container')

const products = [
    {
        id: 1,
        title: 'Humus',
        price: 109.95,
        description: 'Kichererbsenpüree mit Limette, Knoblauch, Olivenöl und Sesampaste nach libanesischer Art',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 2,
        title: 'Tzatziki',
        price: 35.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 3,
        title: 'Gefüllte Weinblätter',
        price: 24.95,
        description: 'Gefüllt mit Reis, Petresille, Zwiebeln und Granatapfel-Olivenöl Sauce',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 4,
        title: 'Grilled Halloumi',
        price: 42.95,
        description: 'Nach Orientalischer Art aus Joghurt mit Gurken und Knoblauch',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
]

function cartFilter(){
    const cartProducts = products.filter((product) => { return product.quantity})
    return cartProducts
}

function cartElements(){
    slideContainer.innerHTML = ''
    cartFilter().forEach((f)=>{
        const slideElementContainer = document.createElement('div')
        slideContainer.appendChild(slideElementContainer)
        slideElementContainer.innerHTML = `<div class="border-b-2 h-full flex flex-col gap-1 bg-gray-100 p-2 rounded-lg mt-5">
        <p class="font-bold">${f.title}</p>
        <p class="mb-2 flex-grow">${f.description}</p>
        <p>${(parseFloat(f.price) * f.quantity).toFixed(2)}</p>
        <p>${f.quantity}</p>
        </div>`

        slideElementContainer.addEventListener("click",function(){
            f.quantity --
            let sum = 0
                cartFilter().forEach(product=> sum += product.quantity)
                basket.innerHTML = sum 
            cartElements()
        })
    })
}

let inputValue = ""

searchInput.addEventListener("input", function () {
    inputValue = searchInput.value.toLowerCase().split(' ')
    searchFilter()
    createElements()
    console.log(inputValue);
})
function searchFilter() {
    if (!inputValue)
        return products
    else {
        return products.filter((filt) => {
            return inputValue.some(search => filt.title.toLowerCase().includes(search))
        })
    }
}

function createElements() {
    mainListContainer.innerHTML = ''
    if (!searchFilter().length) {
        mainListContainer.innerHTML = 'hello'
    } else {
        searchFilter().forEach((f) => {
            const elementContainer = document.createElement('div')
            mainListContainer.appendChild(elementContainer)
            elementContainer.innerHTML =
                `<div class="border-b-2 h-full flex flex-col gap-1 bg-gray-100 p-2 rounded-lg mt-5">
            <p class="font-bold">${f.title}</p>
            <p class="mb-2 flex-grow">${f.description}</p>
            <p>${f.price}</p>
            </div>`

            elementContainer.addEventListener("click", function () {
                let sum = 1
                cartFilter().forEach(product=> sum += product.quantity)
                basket.innerHTML = sum
               
                if(!f.quantity){
                    f.quantity = 1
                }else{
                    f.quantity ++
                }
                cartFilter()
                cartElements()
                console.log(products);
                console.log(cartFilter());
              
            })
        })
    }
}




// const cart = [{
//     id: 10,
//     quantity: 1
// }]

// function addToCart(id){
//     if (cart.includes(id){
//         quantity += 1
//     })
//     else{
//         cart.push()
//     }
// }
basketContainer.addEventListener("click", function () {
    slide.classList.remove('invisible')
    slide.classList.remove('opacity-0')
})

closeSlide.addEventListener("click", function () {
    slide.classList.add('invisible', 'opacity-100')
})


createElements()
cartElements()




