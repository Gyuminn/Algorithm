def solution(n):
    cnt = 0
    lt = 0
    rt = 1
    sum = 1
    
    while rt <= n:
        if sum == n:
            cnt += 1
            rt += 1
            sum += rt
            continue
        if sum > n:
            sum -= lt
            lt += 1
            continue
        if sum < n:
            rt += 1
            sum += rt
            continue
            
    return cnt