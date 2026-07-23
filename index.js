window.addEventListener('load', () => {
    initForwardClick()
    initExpandClick()

})

function initForwardClick() {
    document.querySelectorAll('.forward').forEach(clickable => {
        clickable.addEventListener('click', (e) => {
            // console.log(e.target.closest('.video-container').querySelector('h2').innerHTML);

            console.log('Forward');
        })
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

