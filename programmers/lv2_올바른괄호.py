def solution(s):
    stack = []
    
    for bracket in s:
        if bracket == "(":
            stack.append(bracket)
        elif bracket == ")" and len(stack) == 0:
            return False
        else:
            stack.pop()
            
    if len(stack) > 0:
        return False
    
    return True