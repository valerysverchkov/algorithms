func reverse(x int) int {
	negative := false
	if x < 0 {
		negative = true
		x = -x
	}

	result := 0
	flashNum := x

	for flashNum > 0 {
		rem := flashNum % 10

		if result > math.MaxInt32/10 {
			return 0
		}

		if result == math.MaxInt32/10 && ((negative && rem > 8) || (!negative && rem > 7)) {
			return 0
		}

		result = result*10 + rem
		flashNum /= 10
	}

	if negative {
		return -result
	} else {
		return result
	}
}