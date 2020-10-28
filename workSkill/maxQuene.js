class RequestLimit{
    constructor(limit = 5){
        this.limit = limit;
        this.curr = 0;
        this.task = [];
    }
    async req(url){
        if(this.curr >= this.limit){
            await new Promise(resolve => this.task.push(resolve))
        }
        this.curr++;
        console.log('this.curr', this.curr)
        try{
            await url();
        }catch(res){
            return Promise.reject(res);
        }finally{
            this.curr--;
            if(this.task.length){
                this.task.shift()();
            }
        }
    }
}

function api(time = 1000) {
    new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

let request = new RequestLimit(5)
request.req(api())
request.req(api())
request.req(api())
request.req(api())
request.req(api())
request.req(api())
request.req(api())


