package leet_code

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
//
// For example:
//
//	A -> 1
//	B -> 2
//	C -> 3
//	...
//	Z -> 26
//	AA -> 27
//	AB -> 28
//	...
func convertToTitle(columnNumber int) string {
	if columnNumber < 27 {
		// return the corresponding letter based on columnNumber value
		return string('A' + (columnNumber-1)%26)
	}

	out := ""
	for columnNumber > 0 {
		if columnNumber%26 == 0 {
			// the column title should have 'Z'
			out = string('A'+25) + out
			columnNumber -= 1
		} else {
			// calculate the current letter's position in the alphabet based on the remainder of columnNumber when divided by 26
			out = string('A'+columnNumber%26-1) + out
		}
		// effectively shifting to the next position in the column title
		columnNumber /= 26
	}
	return out
}
