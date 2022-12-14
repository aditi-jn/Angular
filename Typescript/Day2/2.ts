let sort = (array: number[]) => {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let swap = array[i + 1];
                array[i + 1] = array[i];
                array[i] = swap;
            }
        }
    }

    console.log(...array);
}
let array: number[] = [2, 6, 4, 3, 22,1,42,0,123];
sort(array);