/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    const cntOfType = new Map<number, number>();
    for (var typeBird of arr) {
        if (cntOfType.has(typeBird)) {
            cntOfType.set(typeBird, cntOfType.get(typeBird) + 1);
        } else {
            cntOfType.set(typeBird, 1);
        }
    } 
    
    const result = [...cntOfType.entries()].sort((a, b) => {
       if(a[1] > b[1]) {
           return -1;
       } 
       if(a[1] < b[1]) {
           return 1;
       }
       if(a[1] == b[1]) {
           return a[0] - b[0];
       }
    })[0][0];
    
    return result;
}