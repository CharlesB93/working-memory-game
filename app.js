document.addEventListener('DOMContentLoaded'), () => {

    //card options
    const cardArray = {
        {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
    }
    {
        name: '',
        img 'images/.png'
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