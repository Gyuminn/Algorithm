def solution(s):
    s = s[2:-2].split("},{")
    
    numArr = []
    for i in range(len(s)):
        s_split = s[i].split(",")
        numArr.append(set(s_split))
        
    numArr.sort(key = lambda x:len(x))
    
    result = []
    answer = set()
    for num_set in numArr:
        temp = num_set - answer
        result.append(list(temp)[0])
        answer = answer | temp
    
    result = [int(i) for i in result]
    return result