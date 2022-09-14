func isMatch(s string, p string) bool {
	hasString := isEmpty(s)
	if isEmpty(p) {
		return isEmpty(s)
	}

	isMatchFirst := !hasString && (p[0] == s[0] || p[0] == '.')

	if len(p) >= 2 && p[1] == '*' {
		return isMatch(s, p[2:]) || (isMatchFirst && isMatch(s[1:], p))
	} else {
		return isMatchFirst && isMatch(s[1:], p[1:])
	}
}

func isEmpty(s string) bool {
	return s == ""
}