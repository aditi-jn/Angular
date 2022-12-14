var sort = function (array) {
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                var swap = array[i + 1];
                array[i + 1] = array[i];
                array[i] = swap;
            }
        }
    }
    console.log.apply(console, array);
};
var array = [2, 6, 4, 3, 22, 1, 42, 0, 123];
sort(array);
