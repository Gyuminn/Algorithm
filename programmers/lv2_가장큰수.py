def solution(numbers):
    a = list(map(str, numbers))
    a.sort(key = lambda x: x * 3, reverse=True)
    
    return str(int("".join(a)))