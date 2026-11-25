const NOME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Formato: AAAA-MM-DD. Valida mês e quantidade de dias de cada mês.
const DATA_REGEX = /^(?:(?:\d{4}-(?:(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12]\d|3[01])|(?:04|06|09|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8])))|(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29))$/
//REGEX de data, agora não aceita agendamentos para o dia 29 de fevereiro, com exceção de anos bissextos 

const HORA_REGEX = /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/

export { NOME_REGEX, EMAIL_REGEX, DATA_REGEX, HORA_REGEX }
