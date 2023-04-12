from collections import deque

def solution(priorities, location):
    
    queue = deque()
    for i, priority in enumerate(priorities):
        queue.append((i, priority))
    
    cnt = 0
    while queue:
        flag = 0
        cur = queue.popleft()
        
        for node in queue:
            if node[1] > cur[1]:
                queue.append(cur)
                flag = 1
                break
                
        if flag == 1:
            continue
        
        cnt += 1
        if cur[0] == location:
            break
        
    return cnt