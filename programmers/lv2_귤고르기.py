def solution(k, tangerine):
    dict = {}
    
    for i in tangerine:
        dict[i] = dict.get(i, 0) + 1
    
    # 많은 순으로 뽑기
    a = sorted(dict.items(), key=lambda x: x[1], reverse=True)
    
    acc = 0
    key_cnt = 0
    for key, value in a:
        if acc >= k:
            break
        acc += value
        key_cnt += 1
        
    return key_cnt