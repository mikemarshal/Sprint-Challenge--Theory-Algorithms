EXERCISE I:
a)
O(n) ... example: if n was 10
while (a < 1000)
  a += 100
... 10 iterations for a n of 10, thus time complexity is O(n)

b)
if (x > log(i)) {
  the time complexity will be:
  O(x)
} else {
  the time complexity will be:
  O(log(i))
}

c)
O( 8 * 8 * 0.5*sqrt(n) )

d)
O( n * log(n) )

e)
O(n * 1/2 n * 1/4 n * 9)  AKA O(n^4)

f)
O(n)

g)
O(n)

EXERCISE II:

a)
let minval = a[0];
let maxval = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > maxval) {
    maxval = a[i];
  } else if (a[i] < minval) {
    minval = a[i];
  }
}
return maxval - minval;

b)
Knapsack algo

ECERCISE III:

a)
O(n^2) - worst case scenario since it goes through entire array for every element
b)
O(nlog(n)) - average runtime
