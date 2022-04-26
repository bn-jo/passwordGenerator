const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const wordEl = document.getElementById('words')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
    word: getRandomWord
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    const hasWord = wordEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,hasWord, length)
})

function generatePassword(lower, upper, number, symbol, word, length) {
    let generatedPassword = ''
    const typesCount = word + lower + upper + number + symbol 
    const typesArr = [{word}, {lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}
let sc = document.querySelector('#sc')

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

    

  
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%&*()='
    return symbols[Math.floor(Math.random() * symbols.length)]
}




function getRandomWord() {

const words = ['car' , 'dog',
'mother',
'stop',
'letter',
'spot',
'mind',
'wing',
'office',
'office',
'steam',
'sail',
'ghost',
'color',
'belief',
'example',
'road',
'coil',
'soap',
'hammer',
'balloon',
'push',
'nut',
'lake',
'seat',
'weight',
'earth',
'power' ,'gun',


'puzzling',
'match',
'girls',
'red',
'simple',
'polish',
'ring',
'bit',
'need',
'clean',
'output',
'soft',
'holiday',
'sand',
'cool',
'fall',
'name',
'messy',
'pump',
'silent',
'art',
'first',
'lend',
'huge',
'spy',
'delete',
'mute',
'express',
'oil',
'flesh',
'win',
'chunky',
'promise',
'letter',
'sugar',
'end',
'silent',
'handy',
'crate',
'clear',
'bell',
'birth',
'cave',
'impress',
'market',
'kick',
'long',
'glass',
'dry',
'smell',
'delay',
'lock',
'downtown',
'snow',
'upset',
'smooth',
'knife',
'loaf',
'toys',
'scene',
'cower',
'warn',
'airplane',
'secret',
'useless',
'fit',
'pet',
'food',
'leaf',
'watch',
'boil',
'road',
'get',
'jump',
'love',
'lumpy',
'console',
'carry',
'hook',
'extend',
'vest',
'congratulate',
'finish',
'sneak',
'calculate'
]
    return words[Math.floor(Math.random() * words.length)]



}

















