class Result {

    /*
     * Complete the 'compareTriplets' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY a
     *  2. INTEGER_ARRAY b
     */

    public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        int aRes = 0, bRes = 0;
        for (int i = 0; i < a.size(); i++) {
            Integer aNum = a.get(i);
            Integer bNum = b.get(i);
            if (aNum > bNum) {
                aRes++;
            } else if (aNum < bNum) {
                bRes++;
            }
        }
        return List.of(aRes, bRes);
    }

}