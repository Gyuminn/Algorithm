def solution(survey, choices):
    dict = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0
    }
    
    def cal(survey, score):
        if score == 4:
            return 0
        elif score > 4:
            return (survey[1], score - 4)
        elif score < 4:
            return (survey[0], 4 - score)
    
    for i in range(0, len(survey)):
        result = cal(survey[i], choices[i])
        if result != 0:
            dict[result[0]] = dict.get(result[0]) + result[1]
            
    answer = ""
    
    if dict.get('R') >= dict.get('T'):
        answer += 'R'
    else:
        answer += 'T'
    
    if dict.get('C') >= dict.get('F'):
        answer += 'C'
    else:
        answer += 'F'
        
    if dict.get('J') >= dict.get('M'):
        answer += 'J'
    else:
        answer += 'M'
    
    if dict.get('A') >= dict.get('N'):
        answer += 'A'
    else:
        answer += 'N'
        
    return answer