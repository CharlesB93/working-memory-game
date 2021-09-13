document.addEventListener('DOMContentLoaded'), () => {

    //card options
    const cardArray = {
        {
        name: 'Bella',
        img 'images/Bella.png'
    }
    {
        name: 'Bella',
        img 'images/Bella.png'
    }
    {
        name: 'BellaPup',
        img 'images/BellaPup.png'
    }
    {
        name: 'BellaPup',
        img 'images/BellaPup.png'
    }
    {
        name: 'CharlesB',
        img 'images/CharlesB.png'
    }
    {
        name: 'CharlesB',
        img 'images/CharlesB.png'
    }
    {
        name: 'CharlesPhones',
        img 'images/CharlesPhones.png'
    }
    {
        name: 'CharlesPhones',
        img 'images/CharlesPhones.png'
    }
    {
        name: 'BillG',
        img 'images/BillG.png'
    }
    {
        name: 'BillG',
        img 'images/BillG.png'
    }
    {
        name: 'Bezos',
        img 'images/Bezos.png'
    }
    {
        name: 'Bezos',
        img 'images/Bezos.png'
    }
    {
        name: 'Neo',
        img 'images/Neo.png'
    }
    {
        name: 'Neo',
        img 'images/Neo.png'
    }
}

const grid = document.querySelector.('.grid')

//board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var vard = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard) //write click funtion
        grid.appendChild(card)
    }
}