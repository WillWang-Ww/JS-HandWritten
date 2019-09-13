import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true , "eventHub 是个对象")

//可以使用on 和 emit
let called = false
const fn1 = () => {
    called2 = true
    console.log('called2: ' + called2)
}

eventHub.on('xxx',(y)=>{
    called = true
    console.log('called: ' + called) 
    console.log(y)
})
eventHub.emit('xxx',"yyy")

let called2 = false
eventHub.on('zzz', fn1)
eventHub.off('zzz',fn1)
eventHub.emit('zzz',fn1)

setTimeout(() => {
    console.log('1S later ' + called2)
}, 1000);