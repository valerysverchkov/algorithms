module BubbleSort where

doit []  = []
doit [x] = [x]
doit (x:xs) | x > head xs = head xs:doit (x:tail xs)
            | otherwise = x:doit xs 

bubbleSort xs = foldl (\acc e -> doit acc) xs xs