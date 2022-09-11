/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    const appleSize = apples.length;
    const orangeSize = oranges.length;
    const iterableSize = appleSize > orangeSize ? appleSize : orangeSize;
    var appleCnt = 0, orangeCnt = 0;
    for (let i = 0; i < iterableSize; i++) {
        if (appleSize > i) {
            const applePosition = apples[i] + a;
            if (applePosition >= s && applePosition <= t) {
                appleCnt++;
            }
        }
        
        if (orangeSize > i) {
            const orangePosition = oranges[i] + b;
            if (orangePosition >= s && orangePosition <= t) {
                orangeCnt++;
            }
        }
    }
    console.log(appleCnt + "\n" + orangeCnt);
}
