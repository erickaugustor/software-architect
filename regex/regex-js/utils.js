const telefoneRegex = /(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g;

// 0 - 255
const intervaloNumerico = /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g

// 121.122.123.121
const conjuntoIp = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5]])'
const ipv4 = RegExp(`\\b${conjuntoIp}\\.${conjuntoIp}}\\.${conjuntoIp}\\.${conjuntoIp}\\b`, 'g')

// password
const minMaxLength = /^.{6,20}$/gm;
const upperCaseLengths = /^(?=.*[A-Z]).{6,20}$/gm;
const specialCaracters = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*|@#$%!^&*).{6,20}$/gm

// email
const email = /\S+@\w+\.{2,6}({\.\w{2}})?/g
