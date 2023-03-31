def solution(people, limit):
    people = sorted(people, reverse=True)
    
    cnt = 0
    
    lt = 0
    rt = len(people) - 1
    
    while lt<=rt:
        if people[lt] + people[rt] <= limit:
            cnt += 1
            lt += 1
            rt -= 1
            continue
        
        if people[lt] + people[rt] > limit:
            cnt += 1
            lt += 1
            continue
    
    return cnt