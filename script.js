const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    var header = document.getElementById("main-header")
    document.documentElement.style.setProperty('--header-height', `${header.clientHeight}px`)
}

window.addEventListener('resize', appHeight)
appHeight()