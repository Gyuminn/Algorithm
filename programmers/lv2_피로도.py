def solution(k, dungeons):
    
    max_cnt = 0
    now_pirodo = k
    visited = [False] * len(dungeons)
    
    def dfs(now_pirodo, cnt, dungeons, visited):
        nonlocal max_cnt
        max_cnt = max(cnt, max_cnt)
        
        for i in range(len(dungeons)):
            # 방문한 곳일 경우
            if visited[i] == True:
                continue
            # 현재 피로도가 최소 피로도보다 작을 경우
            if now_pirodo < dungeons[i][0]:
                continue
            visited[i] = True
            dfs(now_pirodo - dungeons[i][1], cnt + 1, dungeons, visited)
            visited[i] = False
        
    dfs(now_pirodo, 0, dungeons, visited)
    return max_cnt