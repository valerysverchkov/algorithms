/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    var result = 0;
    for (let i = 0; i < ar.length; i++) {
        const cur = ar[i]
        for (let j = i + 1; j < ar.length; j++) {
            const next = ar[j];
            if ((cur + next) % k == 0) {
                result++;
            }
        }
    }
    return result;
}