/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s: number[], d: number, m: number): number {
    var result = 0;
        
    if (s.length < m) {
        return result;
    }
    
    const iter = s.length - m + 1;
    
    for(let i = 0; i < iter; i++) {
        const sum = s.slice(i, m + i).reduce((acc, cur) => {
            return acc + cur; 
        }, 0);
        
        if (sum == d) {
            result++;
        }
    }
    
    return result;
}