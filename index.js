import { PRODUCTS } from "./feed.js"
import { displayDescription, initRotationTriggers } from "./utilities.js"
window.addEventListener('load', () => {
    feedShowcaseBlocks()
    initRotationTriggers()
    initExpandClick()

})

function feedShowcaseBlocks() {
    PRODUCTS.forEach(product => {
        const productElement = document.getElementById('product-element').content.cloneNode(true)
        // console.log(productElement);

        productElement.querySelector('.video-content-wrapper').setAttribute('data-pos', product.position)
        productElement.querySelector('video').src = product.videoLink
        productElement.querySelector('.product-name').innerHTML = product.name
        productElement.querySelector('.product-full .slideY').innerHTML = product.fullName
        productElement.querySelector('.product-description .slideX').innerHTML =
            `
        <li>${product.features[0]}</li>
        <li>${product.features[1]}</li>
        <li>${product.features[2]}</li>
        <li>${product.features[3]}</li>
        <li>${product.features[4]}</li>
        `
        productElement.querySelector('.product-price .slideY').innerHTML = '$' + product.price
        document.querySelector('.perspective-container').appendChild(productElement)
    })
    addCloseEvent()
}

function addCloseEvent() {
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.expand').classList.remove('expand')
        })
    })
}


function initExpandClick() {
    document.querySelectorAll('.expand-trigger').forEach(expandable => {
        expandable.addEventListener('click', (e) => {
            displayDescription(e)
        })
    })
}