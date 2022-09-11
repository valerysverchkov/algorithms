/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    var min = scores[0];
    var max = scores[0];
    var minCnt = 0, maxCnt = 0;
    for(let i = 1; i < scores.length; i++) {
        const cur = scores[i];
        if (cur > max) {
            max = cur;
            maxCnt++;
            continue
        }
        if (cur < min) {
            min = cur;
            minCnt++
        }
    }
    return [maxCnt, minCnt];
}