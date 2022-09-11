func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	mergedArrays, resultSize := merge(nums1, nums2)

	if resultSize%2 == 0 {
		mid := (resultSize - 1) / 2
		return float64(float64(mergedArrays[mid]+mergedArrays[mid+1]) / 2.0)
	} else {
		return float64(mergedArrays[(resultSize-1)/2])
	}
}

func merge(nums1 []int, nums2 []int) ([]int, int) {
	firstSize := len(nums1)
	secondSize := len(nums2)
	resultSize := firstSize + secondSize
	result := make([]int, resultSize)
	firstStart := 0
	secondStart := 0
	start := 0
	for firstStart < firstSize && secondStart < secondSize {
		if nums1[firstStart] <= nums2[secondStart] {
			result[start] = nums1[firstStart]
			firstStart++
		} else if nums2[secondStart] <= nums1[firstStart] {
			result[start] = nums2[secondStart]
			secondStart++
		}
		start++
	}
	for firstStart < firstSize {
		result[start] = nums1[firstStart]
		start++
		firstStart++
	}
	for secondStart < secondSize {
		result[start] = nums2[secondStart]
		start++
		secondStart++
	}
	return result, resultSize
}