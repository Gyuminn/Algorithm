from collections import deque
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    visited = [[0] * (m + 1) for _ in range(n)]
    answer = -1
    
    def BFS():
        queue = deque()
        queue.append([0,0,1])
        visited[0][0] = 1
        
        while queue:
            [x,y,cnt] = queue.popleft()
            if x == n - 1 and y == m - 1:
                nonlocal answer
                answer = cnt
                return
            
            for k in range(4):
                nx = x + dx[k]
                ny = y + dy[k]
                if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0 and maps[nx][ny] == 1:
                    visited[nx][ny] = 1
                    queue.append([nx,ny, cnt +1])
                              
    BFS()
    return answer