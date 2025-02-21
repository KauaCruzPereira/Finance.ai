export function add(){
    const tittle = document.getElementById('tittle').value
    const value = document.getElementById('value').value
    const transactiontype = document.getElementById('transactionType').value
    const paymentmethod = document.getElementById('paymentMethod').value
    const date = document.getElementById('date').value

    const userdata = {
        tittle,
        value,
        transactiontype,
        paymentmethod,
        date
    }
    console.log(userdata)
}