const lirics = "Tumi bondhu kalA pakhi ami jen ki, bosonto kale tomay bolte pari no, sada sada Kala kalA rong jomese sda kalA"

const exisa = lirics.toLowerCase().split("a".toLowerCase())
console.log(exisa)
const existKala = lirics.split('')
console.log(existKala)
const slic = lirics.slice(2,34)
console.log(slic)

console.log('      abcs    ')
console.log('      abcs    '.trim())

console.log([
    'tumi bondhu k',        'l',
    ' p',                   'khi ',
    'mi jen ki, bosonto k', 'le tom',
    'y bolte p',            'ri no, s',
    'd',                    ' s',
    'd',                    ' k',
    'l',                    ' k',
    'l',                    ' rong jomese sd',
    ' k',                   'l',
    ''
  ].join("==**=="))