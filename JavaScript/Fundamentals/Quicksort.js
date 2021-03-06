//Implement the quick sort function!

function quickSort(arr, lowerBound, upperBound){
    let index = partition(arr, lowerBound, upperBound);
    console.log(arr);
    if(lowerBound < index - 1){
        quickSort(arr, lowerBound, index - 1);
        console.log(arr);
    }
    if(index < right){
        quickSort(arr, index, upperBound);
        console.log(arr);
    }
    return arr;
}



//Takes in an array, a lowerbound, an upperbound, returns  
function partition(arr, lowerBound, upperBound){
    let j = upperBound;
    let i = lowerBound;
    let pivot = Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
    while(i <= j){
        while(arr[i] < pivot){
            i++;
            console.log("adding one to i");
        }
        while(arr[j] > pivot){
            j--;
            console.log("adding one to j");
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return j;
}

arr = [5,8,1,6,4,9,12,-5];
console.log(partition([5,4,9,2,5,3]))
sortedArr = quickSort(arr, 0, arr.length - 1);
console.log(sortedArr);