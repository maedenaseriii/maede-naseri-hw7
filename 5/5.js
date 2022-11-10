let map=new Map()
map.set('name','maede')
// let keys=map.keys()
// console.log(typeof keys)--->object
//به دلیل اینکه خروجی map یک object میباشد و فانکشنی مثل push برای ارایه میباشد ونمیتوتن روی object زد برای این که مشکل رفع بشه کافیه keys را تبدیل به ارایه کنیم
//     keys.push('more')
// /----------------/
const keys=Array.from(map.keys())
console.log(keys)
keys.push('more')
console.log(keys.length)

