def solution(n):
    # 재귀로 풀었을 시 시간이 많이 소요됨.
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
        
    return dp[n] % 1234567