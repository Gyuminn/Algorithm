from collections import deque

def solution(progresses, speeds):
    answer = []
    
    queue_p = deque(progresses)
    queue_s = deque(speeds)
    
    while queue_p:
        for i in range(len(queue_s)):
            queue_p[i] += queue_s[i]
        
        cnt = 0
        flag = 0
        while queue_p:
            if queue_p[0] >= 100:
                queue_p.popleft()
                queue_s.popleft()
                cnt += 1
                flag = 1
            else:
                break
        
        if flag == 1:
            answer.append(cnt)
            
    return answer