func longestPalindrome(s string) string {
	spell := []rune(s)
	size := len(spell)

	if size == 0 || size == 1 {
		return s
	}

	result := make([]rune, 0)

	for i := 0; i < size; i++ {
		for j := 1; j <= size-i; j++ {
			isPolindrom := isPolindrom(spell[i : i+j])
			if isPolindrom && len(result) < j {
				result = spell[i : i+j]
			}
		}
	}

	return string(result)
}

func isPolindrom(r []rune) bool {
	size := len(r)
	if size == 0 || size == 1 {
		return true
	}

	half := size / 2
	for i := 0; i < half; i++ {
		if r[i] == r[size-i-1] {
			continue
		} else {
			return false
		}
	}
	return true
}