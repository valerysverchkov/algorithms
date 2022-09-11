class LongestSubstringWithoutRepeatingCharacters {
    public int lengthOfLongestSubstring(String s) {
        
        Set<Character> charSet = new HashSet<>();
        int size = s.length(), result = 0, i = 0, j = 0;
        
        while (i < size && j < size) {
            if (!charSet.contains(s.charAt(j))) {
                charSet.add(s.charAt(j++));
                result = Math.max(result, j - i);
            } else {
                charSet.remove(s.charAt(i++));
            }
        }
        return result;
    }
}