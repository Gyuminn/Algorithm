import math

def solution(n, words):
    answer = [0,0]
    word_set = set()
    
    index = 0
    
    for i in range(len(words)):
        # 첫 번쨰 사람은 걸리지 않는다.
        if i == 0:
            word_set.add(words[i])
            continue
        
        # 이전에 단어의 마지막 글자와 같지 않다면 return    
        if words[i][0] != words[i-1][-1]:
            index = i + 1
            break
        
        # 단어가 중복된다면 return
        if words[i] in word_set:
            index = i + 1
            break
        
        # 성공한 경우
        word_set.add(words[i])
        
    return [0,0] if index == 0 else [n if index % n == 0 else index % n, math.ceil(index/n)]