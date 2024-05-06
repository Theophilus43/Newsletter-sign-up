const selection = document.querySelector('.subscribed');

const update = selection.value;

const updateAll = document.querySelector('.change');

updateAll.addEventListener('click', () => {
    document.querySelector('.container')
        .innerHTML = `${update}`;
});

// function confirmSub() {
//     document.querySelector('.containers')
//         .innerHTML = `update`
// }