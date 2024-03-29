from collections import deque

def solution(numbers, target):
    queue = deque()
    
    queue.append((numbers[0], 0))
    queue.append((-1*numbers[0], 0))
    
    cnt = 0
    while queue:
        v, i = queue.popleft()
        if i < len(numbers) - 1:
            queue.append((v + numbers[i+1], i+1))
            queue.append((v - numbers[i+1], i+1))
        else:
            if v == target:
                cnt += 1
            
    return cnt