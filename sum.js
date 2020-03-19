function add(a) {
    let sum = a;
    if (arguments.length > 1) {
        sum = 0;
        for (let i=0; i<arguments.length; i++ ) {
            sum += arguments[i];
        } 
    }

    function result(b) {
        if (arguments.length > 1) {
            for (let i=0; i<arguments.length; i++ ) {
                sum += arguments[i];
            } 
        } else {
           sum += b     
        } 
            return result;
        }

    result.toValue = function() {
        return sum;
    }

    return result;
}

const ans = add(1)(3, 2)(4,5,6).toValue();
console.log(ans);