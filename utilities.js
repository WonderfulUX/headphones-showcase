export function initRotationTriggers() {
    document.querySelectorAll('.clockwise').forEach(cwTrigger => {
        cwTrigger.addEventListener('click', moveElementsClockwise)
    })
    document.querySelectorAll('.anti-clockwise').forEach(acwTrigger => {
        acwTrigger.addEventListener('click', moveElementsAntiClockwise)
    })
}

export function moveElementsAntiClockwise(e) {
    if (document.querySelector('[data-pos="3"]')) {
        document.querySelector('[data-pos="3"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="2"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="1"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="3"]').setAttribute('data-pos', 4)
        document.querySelector('[data-pos="2"]').setAttribute('data-pos', 6)
        document.querySelector('[data-pos="1"]').setAttribute('data-pos', 5)
    }
    else {
        document.querySelector('[data-pos="6"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="5"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="4"]').classList.add('ctn-antiClockwise')
        document.querySelector('[data-pos="6"]').setAttribute('data-pos', 1)
        document.querySelector('[data-pos="5"]').setAttribute('data-pos', 3)
        document.querySelector('[data-pos="4"]').setAttribute('data-pos', 2)
    }
    document.querySelectorAll('.ctn-antiClockwise').forEach(element => {
        element.addEventListener('transitionend', () => {
            element.classList.remove('ctn-antiClockwise')
        })
    })
}


export function moveElementsClockwise() {
    if (document.querySelector('[data-pos="2"]')) {
        document.querySelector('[data-pos="2"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="3"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="1"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="2"]').setAttribute('data-pos', 4)
        document.querySelector('[data-pos="3"]').setAttribute('data-pos', 5)
        document.querySelector('[data-pos="1"]').setAttribute('data-pos', 6)
    }
    else {
        document.querySelector('[data-pos="5"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="6"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="4"]').classList.add('ctn-clockwise')
        document.querySelector('[data-pos="5"]').setAttribute('data-pos', 1)
        document.querySelector('[data-pos="6"]').setAttribute('data-pos', 2)
        document.querySelector('[data-pos="4"]').setAttribute('data-pos', 3)
    }
    document.querySelectorAll('.ctn-clockwise').forEach(element => {
        element.addEventListener('transitionend', () => {
            element.classList.remove('ctn-clockwise')
        })
    })
}

export function displayDescription(e) {
    e.target.closest('.video-frame').classList.toggle('expand')
    document.querySelector('.animation-btn-ctn') && document.querySelector('.animation-btn-ctn').classList.add('slideY')

}
