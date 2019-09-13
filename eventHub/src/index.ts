class EventHub {
    cache = {}
    //cache { key:eventHub value:[fn1,fn2..] } 存事件名和事件回调
    on(eventName,fn){
        //对新增的 eventName 进行初始化
        this.cache[eventName] = this.cache[eventName] || []
        //把 fn 推进对应 eventName 的数组
        this.cache[eventName].push(fn)
    }
    emit(eventName,data?){
        //遍历并依次调用 fn
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName,fn){
        //把 fn 从 eventName 的数组删除
        this.cache[eventName] = this.cache[eventName] || []
        let index = indexOf(this.cache[eventName],fn)
        if ( index === undefined ) {
            return
        }else {
            this.cache[eventName].splice(index , 1)
        }
    }
}

export default EventHub

function indexOf ( array , item) {
    let index = -1
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] === item){
            index = i
            break
        }
    }
    return index
}