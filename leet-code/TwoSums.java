class TwoSums {
    
    private Map<Integer, Integer> diffMap = new HashMap<>();
    
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (diffMap.containsKey(nums[i])) {
                return new int[]{diffMap.get(nums[i]), i};
            } else {
                diffMap.put(target - nums[i], i);
            }
        }
        return new int[]{};
    }
}