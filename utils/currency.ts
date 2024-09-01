export function formatToCurrency(value: number) {
    return Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currencyDisplay:'symbol',
        currencySign:'standard',
        style:'currency'
    }).format(
        value,
    );
}