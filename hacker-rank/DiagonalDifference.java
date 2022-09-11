class DiagonalDifference {

    /*
     * Complete the 'diagonalDifference' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY arr as parameter.
     */

    public static int diagonalDifference(List<List<Integer>> arr) {
        var rightOffset = arr.size() - 1;
        var right = 0; 
        var left = 0;
        for(int i = 0;i < arr.size(); i++) {
            var line = arr.get(i);
            left += line.get(i);
            right += line.get(rightOffset - i);
        }
        return Math.abs(left - right);
    }

}