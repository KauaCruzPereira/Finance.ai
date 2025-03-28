export function formatDate(date){
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(new Date(date))
  return formattedDate
}

export function getDateFromString(date){
  const dateValue = date.split('-')
  dateValue[1] -=1
  return new Date(dateValue[0], dateValue[1], dateValue[2])
}
