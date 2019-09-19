class EventHub {
    //加 privide 表示私有 只能在内部访问
    private cache = {}
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
        //找到数组的索引
        let index = indexOf(this.cache[eventName],fn) 
        if ( index === -1 ) {return}
        //在索引位置删掉一项
        this.cache[eventName].splice(index , 1)
    }
}

export default EventHub

function indexOf ( array , item) {
    if (array === undefined) {return -1}
    let index = -1
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] === item){
            index = i
            break
        }
    }
    return index
}