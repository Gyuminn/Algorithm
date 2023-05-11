import sys

read = sys.stdin.readline

W, N = map(int, read().split(" "))

metals = [list(map(int, read().split(" "))) for _ in range(N)]

metals_sorted = sorted(metals, key = lambda x : -x[1])

price = 0
for M, P in metals_sorted:
    if M <= W:
        price += M * P
        W -= M
    else:
        price += W * P
        break

print(price)