async function req() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(100)
        }, 100)
    })
}

async function excute () {
    let res = await req().catch(err => {
        console.log('err', err)
    })
    console.log('res', res)
}

async function excute2 () {
    try {
        let res2 = await req()
        console.log('res2', res2)
    } catch (err2) {
        console.log('err2', err2)
    }
}

excute()
excute2()
