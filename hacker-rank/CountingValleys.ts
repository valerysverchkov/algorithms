/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
    var cntValleys = 0;
    var curLevel = 0
    var isValley = false;
    for (let cur of [...path]) {
        if (cur == 'D') {
            if (curLevel == 0) {
                isValley = true
            }
            curLevel -= 1;
        } 
        if (cur == 'U') {
            if (curLevel == 0) {
                isValley = false
            }
            curLevel += 1
        }
        if (curLevel == 0 && isValley) {
            cntValleys++
        } 
        // console.error(`Char isn't 'U' or 'D': ${cur}`)
    }
    return cntValleys;
}