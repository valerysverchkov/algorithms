/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    const nExist = new Set<number>();
    var pairCnt = 0;
    for(var cur of ar) {
        if (nExist.has(cur)) {
            pairCnt++;
            nExist.delete(cur);
        } else {
            nExist.add(cur);
        }
    }
    return pairCnt;
}