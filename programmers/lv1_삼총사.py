def solution(number):
    # dfs를 이용해서 조합 구하기
    temp = [0] * 3
    comb = []
    
    def dfs(level, start):
        if (level == 3):
            comb.append(temp[:])
        else:
            for i in range(start, len(number)):
                temp[level] = number[i]
                dfs(level + 1, i + 1)
                
    dfs(0,0)
    
    cnt = 0
    for i in comb:
        if sum(i) == 0:
            cnt += 1
            
    return cnt