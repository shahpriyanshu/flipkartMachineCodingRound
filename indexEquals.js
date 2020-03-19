function indexEqualsValue(sortAr) {
    var response = -1;
    
    for (var i=0; i <sortAr.length; i++ ) {
        
        if (sortAr[i] === i) {
            response = i;
            break;
        }

        if (sortAr[i] > i) {
            break;
        }
    }

    console.log(response);
}

var ar = [-1,0,2,6];

indexEqualsValue(ar)