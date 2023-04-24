from heapq import heappush, heappop
import math

def solution(jobs):
    acc = 0
    now = 0
    cnt = 0
    start = -1
    heap = []
    
    while cnt < len(jobs):
        # 현재 처리할 수 있는 작업들을 queue에 넣어준다.
        # 소요 시간이 적게 걸리는 것부터 넣어준다..
        for j in jobs:
            if start < j[0] <= now:
                heappush(heap, [j[1], j[0]])
            
            # 처리할 수 있는 작업이 존재한다면 가장 소요시간이 적게 걸리는 것을 수행
        if len(heap) > 0:
            current = heappop(heap)
            # 시작 시간은 현재 시간
            start = now
            # 현재 시간은 작업 시간을 더해준다.
            now += current[0]
            # 누적 소요 시간은 (작업시간 - 작업요청시간)
            acc += (now - current[1])
            cnt += 1
            
        # 처리할 수 있는 작업이 존재하지 않는다면
        else:
            now += 1
    return math.floor(acc / len(jobs))
                