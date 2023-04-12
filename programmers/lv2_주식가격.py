from collections import deque

def solution(prices):
    queue = deque(prices)
    answer = []
    while queue:
        price = queue.popleft()
        cnt = 0
        
        for q in queue:
            cnt += 1
            if price > q:
                break;
        answer.append(cnt)
    return answer