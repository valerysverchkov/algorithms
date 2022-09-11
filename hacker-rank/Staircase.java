class Result {

    /*
     * Complete the 'staircase' function below.
     *
     * The function accepts INTEGER n as parameter.
     */

    public static void staircase(int n) {
        var sb = new StringBuilder();
        for(int i = 1; i <= n; i++) {
            sb.append(" ".repeat(n - i));
            sb.append("#".repeat(i));
            sb.append("\n");
        }
        System.out.println(sb.toString());
    }

}
