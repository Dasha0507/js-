const sorter = {
    sortUp:
    function sortUp(arr) {
        arr.sort( (a, b) => a - b )
        console.log(arr);   
    },

    bubbleSort: 
    function bubbleSort(arr) {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {        
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    console.log(arr);
    },

    sortUpWithoutSort:
    function sortUpWithoutSort(arr) {
        let arr2 = arr.slice(0, arr.length);
        let result = [];
        arr2.forEach(() => {
            let minEl = 0;
            minEl = arr.indexOf(Math.min.apply(Math, arr));
            result.push(arr[minEl]);
            arr.splice(minEl, 1);
        });
        console.log(result);
    },
 
    sortDown: 
    function sortDown(arr) {
        let res = arr.sort( (a, b) => b - a );
        console.log(res);   
    }
}
 
let arr = [66, 90, -99, -99, 98, 0, 6, 89, 46];
sorter.sortUp(arr);
sorter.bubbleSort(arr);
sorter.sortUpWithoutSort(arr);
sorter.sortDown(arr);