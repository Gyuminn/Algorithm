# 다트 게임
def solution(dartResult):
    dartResult = dartResult.replace("10", "A")
    
    stack = []
    
    for i in dartResult:
        if i.isdigit() or i=='A':
            stack.append(10 if i == 'A' else int(i))
        elif i == 'S':
            num = stack.pop()
            stack.append(num)
        elif i == 'D':
            num = stack.pop()
            stack.append(num ** 2)
        elif i == 'T':
            num = stack.pop()
            stack.append(num ** 3)
        elif i == '#':
            stack[-1] *= -1
        elif i == '*':
            num = stack.pop()
            if len(stack):
                stack[-1] *= 2
            stack.append(num * 2)
            
    return sum(stack)