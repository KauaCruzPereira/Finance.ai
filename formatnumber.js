export function formatnumbers(value) {
    value = parseFloat(value).toLocaleString('pt-BR', {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    return value
}