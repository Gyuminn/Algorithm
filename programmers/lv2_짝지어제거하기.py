def solution(s):
    stack = []
    
    for char in s:
        if len(stack) == 0:
            stack.append(char)
            continue    
        if stack[-1] == char:
            stack.pop()
            continue
        stack.append(char)
        
    return 1 if len(stack) == 0 else 0