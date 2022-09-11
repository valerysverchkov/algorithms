class Result {

    /*
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        var noon = s.substring(s.length() - 2);
        var hour = Integer.parseInt(s.substring(0, 2));
        var timeWithoutHour = s.substring(2, s.length() - 2);
        if (noon.equals("PM")) {
            if (hour == 12) {
                return s.substring(0, s.length() - 2);
            }
            return String.valueOf(hour + 12) + timeWithoutHour;
        } else if (noon.equals("AM")) {
            if (hour == 12) {
                return "00" + timeWithoutHour;
            }
            return s.substring(0, s.length() - 2);
        }
        return "null";
    }

}