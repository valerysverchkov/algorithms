/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if (v2 < v1) {
        const temp = ((x2 - x1) % (v1 - v2));
        if (temp === 0) {
            return "YES";
        }
    }
    return "NO";
}