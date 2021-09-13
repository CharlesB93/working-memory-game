document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    {
        name: 'bella',
        img: 'images/bella.png'
    },
    {
        name: 'bella-pup',
        img: 'images/bella-pup.png'
    },
    {
        name: 'charles-b',
        img: 'images/charles-b.png'
    },
    {
        name: 'charles-phones',
        img: 'images/charles-phones.png'
    },
    {
        name: 'billg',
        img: 'images/bill-g.png'
    },
    {
        name: 'bezos',
        img: 'images/bezos.png'
    },
    {
        name: 'bella',
        img: 'images/bella.png'
    },
    {
        name: 'bella-pup',
        img: 'images/bella-pup.png'
    },
    {
        name: 'charles-b',
        img: 'images/charles-b.png'
    },
    {
        name: 'charles-phones',
        img: 'images/charles-phones.png'
    },
    {
        name: 'billg',
        img: 'images/bill-g.png'
    },
    {
        name: 'bezos',
        img: 'images/bezos.png'
    },

]


const grid = document.querySelector('.grid')

//board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/charles-free.png')
        card.setAttribute('data-id', i)
       // card.addEventListener('click', flipcard) //write click funtion
        grid.appendChild(card)
    }
}
createBoard()
})
