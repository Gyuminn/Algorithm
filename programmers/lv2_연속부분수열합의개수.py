def solution(elements):
    cycle = elements + elements
    s = set()
    
    for i in range(len(elements)):
        for j in range(len(elements)):
            s.add(sum(cycle[i:i+j]))
    return len(s)