import sys

read = sys.stdin.readline

data = list(map(int, read().split(' ')))

gear = ''

if data[1] > data[0]:
    gear = 'ascending'
else:
    gear = 'descending'

for i in range(2, len(data)):
    temp = ''
    if data[i] > data[i-1]:
        temp = 'ascending'
    elif data[i] < data[i-1]:
        temp = 'descending'
    
    if gear != temp:
        gear = 'mixed'
        break

print(gear)
