from collections import deque

def solution(m, n, puddles):
    # puddles가 반대로 되어있어 변경
    puddles = [[y,x] for [x,y] in puddles]
    # dp 2차원 배열 초기화
    dp = [[0] * (m + 1) for _ in range(n+1)]
    
    # 시작 위치
    dp[1][1] = 1
    
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if i == 1 and j == 1:
                continue
            if [i,j] in puddles:
                dp[i][j] = 0
            else:
                dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007
    
    return dp[n][m]