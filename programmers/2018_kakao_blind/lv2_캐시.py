from collections import deque

def solution(cacheSize, cities):
    queue = deque()
    time = 0
    
    for city in cities:
        # 대소문자 구분을 하지 않으므로
        city = city.lower()
        
        # 캐시 사이즈가 0보다 클 경우
        if cacheSize > 0:
            # cash hit일 경우
            if city in queue:
                queue.remove(city)
                queue.append(city)
                time += 1
            
            # cash miss일 경우
            if city not in queue:
                if len(queue) == cacheSize:
                    queue.popleft()
                queue.append(city)
                time += 5
                
        # 캐시사이즈 0일때
        else:
            time += 5
    
    return time