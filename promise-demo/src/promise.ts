class Promise1 {
    //对象的属性
    succeed = null;
    fail = null;

    resolve() {
        setTimeout(() => {
            // fn调用resolve的时候，调用传到then的第一个函数
            this.succeed();
        }, 0)
    }
    reject() {
        setTimeout(() => {
            // fn调用reject的时候，调用传到then的第二个函数
            this.fail();
        }, 0)
    }
    constructor(fn) {
        // 接收的参数不是函数则报错
        if (typeof fn !== 'function') {
            throw new Error('Promise只接收一个函数');
        }
        // fn 要立即执行
        fn(this.resolve, this.reject);
    }
    // 添加对象属性then
    then(succeed, fail) {
        // 存到对象上面
        this.succeed = succeed;
        this.fail = fail;
    }
}

export default Promise1;