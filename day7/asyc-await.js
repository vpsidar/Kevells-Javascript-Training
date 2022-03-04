 function promiseSetTimeout(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            timerElement.innerText = new Date().toLocaleString();
            resolve()
            reject()
        },5000)
        })
}

promiseSetTimeout().then(() => {
    console.log('statement 1')
    return promiseSetTimeout()
}).then(() => {
    console.log('staement 2')
    return promiseSetTimeout()
}).then(() => {
    console.log('statement 3')
})

// you can do it very concise way

async function boot() {
    await promiseSetTimeout()
    console.log('statement 1')
    await promiseSetTimeout()
    console.log('statement 2')
    await promiseSetTimeout()
    console.log('statement 3')

}

