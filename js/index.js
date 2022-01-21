const elem = document.getElementsByClassName('modal')[0]
const elem_block = document.getElementsByClassName('modal__block')[0];
elem.addEventListener('click', () => {
    elem.classList.remove('modal--visible');
})

document.getElementById('button').addEventListener('click', (e) => {
    fetch('https://rpi-lab2.herokuapp.com/api/message')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        elem.classList.add('modal--visible');
        elem_block.innerHTML = JSON.stringify(data);
    })
})

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
    //   mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    });
    return await response;
}

document.getElementById('button2').addEventListener('click', () => {
    console.log('pressed 2');
    postData('https://rpi-lab2.herokuapp.com/api/message', {userName: 'Denis Grigoryev', message: "Hello from web developers!!!!"})
    .then((res) => {
        console.log(res);
    });
})
