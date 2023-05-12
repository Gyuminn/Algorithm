import sys
from collections import deque

read = sys.stdin.readline

N = int(read())

board = [list(map(int, read().strip())) for _ in range(N)]

visited = [[0] * N for _ in range(N)]
cnt = 0
answer = []

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def BFS(sx, sy):
    # 이미 방문한 노드이거나 장애물이 없는 도로라면 BFS 종료
    if visited[sx][sy] == 1 or board[sx][sy] == 0:
        return

    queue = deque()
    queue.append([sx,sy])
    visited[sx][sy] = 1
    global cnt
    cnt += 1
    temp_cnt = 1

    while queue:
        x, y = queue.pop()

        for k in range(0, 4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == 0 and board[nx][ny] == 1:
                visited[nx][ny] = 1
                queue.append([nx,ny])
                temp_cnt += 1
    
    answer.append(temp_cnt)

for i in range(N):
    for j in range(N):
        BFS(i,j)

answer.sort()

print(cnt)
print(*answer, sep='\n')