class Result {

    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
        long sum = arr.stream().mapToLong(Integer::longValue).sum();
        var min = sum;
        var max = 0L;
        for (int i = 0; i < arr.size(); i++) {
            var res = sum - arr.get(i);
            if (res > max) {
                max = res;
            }
            if (res < min) {
                min = res;
            }
        }
        System.out.println(min + " " + max);
    }

}