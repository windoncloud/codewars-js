var storageOperation = {
    storgeSet: new Set(),
    getStorage: function(key) {
        let localValue = localStorage.getItem(key);
        let data = localValue ? JSON.parse(localValue) : '';
        return data.value
    },
    setStorage: function (key, value) {
        try {
            let obj = {
                time: Date.now(),
                value
            }
            localStorage.setItem(key, JSON.stringify(obj));
            // 如果存在相同的，刪除对应的
            if (this.storgeSet.has(key)) {
                this.storgeSet.delete(key)
            }
            this.storgeSet.add(key)
        } catch (err) {
            this.removeStorage(key, value)
        }
    },
    removeStorage: function  (key, value) {
        // 先对存储的排序，找到最早存的，然后删除
        this.sortStorge();
        for (let oldKey of this.storgeSet) {
            localStorage.removeItem(oldKey)
            this.storgeSet.delete(oldKey)
            break
        }
        this.setStorage(key,value)
    },
    // 排序
    sortStorge: function () {
        let temp = [];
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                temp.push({
                    key,
                    value: localStorage[key] ? JSON.parse(localStorage[key]) : ''
                })
            }
        }
        for (let outIndex = 0; outIndex < temp.length - 1; outIndex++) {
            let min = outIndex
            for (let innerIndex = outIndex + 1; innerIndex < temp.length; innerIndex++) {
                if (temp[innerIndex].value.time < temp[min].value.time) {
                    min = innerIndex
                }
            }

            if (min != outIndex) {
                const swapTemp = temp[min]
                temp[min] = temp[outIndex]
                temp[outIndex] = swapTemp
            }
        }
        for (let i=0,len=temp.length;i<len;i++) {
            this.storgeSet.add(temp[i].key)
        }
    }
}
