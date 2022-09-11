/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill: number[], k: number, b: number): void {
    var result = 0; 
    for (let i = 0; i < bill.length; i++) {
        result += i != k ? bill[i] : 0;
    }
    
    result /= 2;
    
    if (result == b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - result);
    }
}
