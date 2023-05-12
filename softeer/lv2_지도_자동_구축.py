import sys

temp = [0] * 16

temp[1] = 3

for i in range(2, 16):
    temp[i] = temp[i-1] * 2 - 1

read = sys.stdin.readline

N = int(read())

print(temp[N] ** 2)