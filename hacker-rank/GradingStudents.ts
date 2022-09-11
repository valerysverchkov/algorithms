/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades: number[]): number[] {
    for(var i = 0; i < grades.length; i++) {
        const grade =  grades[i];
        if (grade < 38) {
            continue;
        }
        const divTen = grade % 10;
        if (divTen < 5 && divTen >= 3) {
            grades[i] = grade + (5 - divTen);
            continue;
        }
        if (divTen < 10 && divTen >= 8) {
            grades[i] = grade + (10 - divTen);
            continue;
        }
    }
    return grades;
}