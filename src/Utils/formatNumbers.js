export function formatNumbers(value) {
    value = value.toString().replace(/\D/g, ''); 
    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(value / 100); 
    return formattedValue
}