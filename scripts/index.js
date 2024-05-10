const selection = document.querySelector('.subscribed');

let update = selection.value;

const updateAll = document.querySelector('.change');

updateAll.addEventListener('click', () => {
   console.log(document.querySelector('.container')
        .innerHTML = `${update}`;
});
