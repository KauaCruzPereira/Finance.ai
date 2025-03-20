export function formatNumbers(value) {
    let onlyNumbers = value.toString().replace(/\D/g, ''); 
    if (value < 0){
        onlyNumbers = onlyNumbers* -1
    }
    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(onlyNumbers / 100); 
    return formattedValue
}