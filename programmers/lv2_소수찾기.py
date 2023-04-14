def solution(numbers):
    
    visited = [False] * len(numbers)
    comb = []
    def dfs(level, limit, temp):
        if level == limit:
            comb.append(int("".join(temp[:])))
        else:
            for i in range(0, len(numbers)):
                if visited[i] == True:
                    continue
                temp[level] = numbers[i]
                visited[i] = True
                dfs(level + 1, limit, temp)
                visited[i] = False
    
    
    for i in range(len(numbers)):
        temp = [0] * (i+1)
        dfs(0,i+1,temp)
    
    nums = list(set(comb))
    answer = []
    for n in nums:                            
        if n < 2:                                 
            continue
        check = True            
        for i in range(2,int(n**0.5) + 1):        
            if n % i == 0:                        
                check = False
                break
        if check:
            answer.append(n)                  
    return len(answer)