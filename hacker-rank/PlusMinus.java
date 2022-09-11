class PlusMinus {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
        var positive = 0;
        var negative = 0;
        var zero = 0;
        var size = arr.size();
        for(int i = 0; i < size; i++) {
            var number = arr.get(i);
            if (number > 0) {
                positive++;
            } else if (number < 0) {
                negative++;
            } else {
                zero++;
            }
        }
        System.out.printf("%.6f\n", (double) positive / size);
        System.out.printf("%.6f\n", (double) negative / size);
        System.out.printf("%.6f\n", (double) zero / size);
    }

}