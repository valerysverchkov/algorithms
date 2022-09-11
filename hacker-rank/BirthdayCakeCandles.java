class Result {

    /*
     * Complete the 'birthdayCakeCandles' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY candles as parameter.
     */

    public static int birthdayCakeCandles(List<Integer> candles) {
        var max = 0;
        var cnt = 0;
        for (int i = 0; i < candles.size(); i++) {
            var current = candles.get(i);
            if (current > max) {
                max = current;
                cnt = 1;
                continue;
            }
            if (current == max) {
                cnt++;
            }
        }
        return cnt;
    }

}