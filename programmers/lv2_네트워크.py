from collections import deque

def solution(n, computers):
    # 이미 인접 행렬이 주어져 있음.
    def BFS(v):
        queue = deque()
        queue.append(v)    
        while queue:
            cur_v = queue.popleft()
            visited[cur_v] = 1
            # 인접 행렬을 순회
            for i in range(len(computers[cur_v])):
                # 방문하지 않았고, 연결되어있다면 queue에 추가
                if visited[i] == 0 and computers[cur_v][i] == 1:
                    queue.append(i)
    
    answer = 0
    visited = [0 for _ in range(len(computers))]
    for i in range(n):
        if visited[i] == 0:
            BFS(i)
            answer += 1
        
    return answer