export function displayData() {
    const data = JSON.parse(localStorage.getItem('Usuários'))
    data.forEach(usuario => {
        const transactionsDisplay = document.getElementById('transactionsDisplay')

        const moneyMovement = document.createElement('div')
        moneyMovement.classList.add('moneyMovement')

        const itemsDescription = document.createElement('div')

        const itemTittle = document.createElement('p')
        itemTittle.textContent = usuario.tittle
        itemTittle.classList.add('itemTittle')

        const itemDate = document.createElement('p')
        itemDate.textContent = usuario.date
        itemDate.classList.add('itemDate')

        const earnedMoney = document.createElement('div')
        earnedMoney.classList.add('earnedMoney')

        const itemValue = document.createElement('p')
        itemValue.textContent = usuario.value

        const transactionType = document.createElement('img')

        if (usuario.transactiontype == "1") {
            transactionType.src = 'images/Trending Up.svg'
            transactionType.classList.add('iconstyles')
            transactionType.style.background = 'rgba(85, 176, 46, 0.08)'
        } else if (usuario.transactiontype == "2") {
            transactionType.src = 'images/Trending Down.svg'
            transactionType.classList.add('iconstyles')
            transactionType.style.background = 'rgba(246, 53, 46, 0.08)'
             itemValue.style.color = 'red'
        }else if(usuario.transactiontype == "3"){
            transactionType.src = 'images/Piggy Bank.svg'
            transactionType.classList.add('iconstyles')
            transactionType.style.background = 'rgba(255, 255, 255, 0.08)'
            itemValue.style.color = 'white'
        }

        transactionsDisplay.appendChild(moneyMovement)
        moneyMovement.appendChild(transactionType)
        moneyMovement.appendChild(itemsDescription)
        moneyMovement.appendChild(earnedMoney)
        itemsDescription.appendChild(itemTittle)
        itemsDescription.appendChild(itemDate)
        earnedMoney.appendChild(itemValue)

    });

}