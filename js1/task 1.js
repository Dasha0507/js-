const compareArr = (prev_index, next_index) =>
{
    if( prev_index > next_index) return 1;
    if( prev_index == next_index) return 0;
    if( prev_index < next_index) return -1;
}
 
 
const methods = {
    getMaxSubSum_N2: 
        function getMaxSubSum_N2(arr) {
            let sum = 0;
            let max_sum = 0; 
    
            for (let i = 0; i < arr.length; i++) {
                 for (let j = i; j < arr.length; j++) {
                 sum += arr[j];
                if(sum > max_sum) {
                    max_sum = sum;
                }else {
                    sum = 0;
                    }
                }
            }
        console.log("Максимальная сумма сложность On2:" +  " " + max_sum);
    },
 
    getMaxSubSum_N: 
    function getMaxSubSum_N(arr) {
        let sum = 0;
            let max_sum = 0; 
 
            for(let i = 0; i<arr.length; i++){
                sum += arr[i];
                if(sum > max_sum) {
                    max_sum = sum;
                }else
                {
                    sum = 0;
                }
            }
 
        console.log("Максимальная сумма сложность On:" +  " " + max_sum);
    },
 
    getMinValue:
    function getMinValue(arr){
        let min_value = arr[0];
            let max_value = arr[0];
        
            for(let i = 1; i< arr.length; i++)
            {
                if(arr[i]<min_value) {
                    min_value = arr[i];
                }
            }
        console.log("Минимальное значение:" +  " " + min_value);
    }, 
 
    getMaxValue:
    function getMaxValue(arr) {
        let max_value = arr[0];
        for(let i = 1; i< arr.length; i++)
        {
            if(arr[i]>max_value) {
                max_value = arr[i];
            }
        }
 
        console.log("Максимальное значение:" +  " " + max_value);
    },
 
    searchOfMediana:
    function searchOfMediana(arr) {
        let mediana = 0;
        if(arr.length % 2 == 0) {
            mediana = (arr[arr.sort(compareArr).length/2] + arr[arr.sort(compareArr).length/2 - 1])/2;    
        }else if(arr.length % 2 !== 0) {
            mediana = arr[arr.sort(compareArr).length/2 - 0.5];
        }

        console.log("Медиана:" +  " " + mediana);
    }
 
}
 
let arr = [1, 89, -98, 64, 57, -54];
methods.getMaxSubSum_N(arr);
methods.getMaxSubSum_N2(arr);
methods.getMaxValue(arr);
methods.getMinValue(arr);
methods.searchOfMediana(arr);
