def solution(s):
    flag = 0
    
    answer = ''
    for char in s:
        if char == ' ':
            answer += char
            flag = 0
            continue
            
        if char.isdecimal() == True:
            answer += char
            flag = 1
        elif flag == 0:
            answer += char.upper()
            flag = 1
        elif flag == 1:
            answer += char.lower()
    
    return answer