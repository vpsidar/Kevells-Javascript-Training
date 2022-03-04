const timerElement = document.getElementById('timer');


function promiseSetTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        timerElement.innerText = new Date().toLocaleString();
        resolve()
        reject()
    },5000)
    })
}

// console.log(promiseSetTimeout())
promiseSetTimeout().then((result) => {
    console.log('Text is printed in your screen');
})

// Promise.resolve(100); another syntax is there

