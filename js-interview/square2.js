/**
 *
 * @param end
 * @param base
 * @returns {number}
 * @constructor
 */
function NewtonIterationMethod(end = 6, base = 2) {
    if (typeof end !=='number' ||  end < 1) {
        end = 1
    }
    end = parseInt(end)
    let target = 4
    let i = 0
    while(i !== end) {
        target = (target + base / target) / base
        i++
    }
    return target
}

let res = NewtonIterationMethod(3)
console.log('resres', res)

