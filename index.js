window.addEventListener('load', () => {
    initRotationTriggers()
    initExpandClick()

})


function initRotationTriggers() {
    document.querySelectorAll('.clockwise').forEach(cwTrigger => {
        cwTrigger.addEventListener('click', moveElementsClockwise)
    })
    document.querySelectorAll('.anti-clockwise').forEach(acwTrigger => {
        acwTrigger.addEventListener('click', moveElementsAntiClockwise)
    })
}

function initExpandClick() {
    document.querySelectorAll('.expand').forEach(expandable => {
        expandable.addEventListener('click', (e) => {
            console.log('expand');

            // console.log(e.target.closest('.video-container').querySelector('h2').innerHTML);

        })
    })
}

function moveElementsAntiClockwise(e) {
    // console.log('anti');
    if (document.querySelector('[data-pos="3"]')) {
        document.querySelector('[data-pos="3"]').setAttribute('data-pos', 4)
        document.querySelector('[data-pos="2"]').setAttribute('data-pos', 6)
        document.querySelector('[data-pos="1"]').setAttribute('data-pos', 5)
    }
    else {
        document.querySelector('[data-pos="6"]').setAttribute('data-pos', 1)
        document.querySelector('[data-pos="5"]').setAttribute('data-pos', 3)
        document.querySelector('[data-pos="4"]').setAttribute('data-pos', 2)
    }
}
function moveElementsClockwise() {
    // console.log('clockwise');
    if (document.querySelector('[data-pos="2"]')) {
        document.querySelector('[data-pos="2"]').setAttribute('data-pos', 4)
        document.querySelector('[data-pos="3"]').setAttribute('data-pos', 5)
        document.querySelector('[data-pos="1"]').setAttribute('data-pos', 6)
    }
    else {
        document.querySelector('[data-pos="5"]').setAttribute('data-pos', 1)
        document.querySelector('[data-pos="6"]').setAttribute('data-pos', 2)
        document.querySelector('[data-pos="4"]').setAttribute('data-pos', 3)
    }

}