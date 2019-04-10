let size = 5;

let orderElement = 1;

const start = () => {
    const btn = document.createElement('button');
    const btnClear = document.createElement('button');
    btn.textContent = "Dodaj 5 elementów do listy";
    btnClear.textContent = "Wyczyść wszystko";
    btn.style.fontSize = "20px";
    btnClear.style.fontSize = "20px";
    document.body.appendChild(btn);
    document.body.appendChild(btnClear);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnClear.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = '';
    size = 5;
    orderElement = 1;
}

start();