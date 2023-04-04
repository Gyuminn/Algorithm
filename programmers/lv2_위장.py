def solution(clothes):
    cloth_dict = {}
    
    for name, category in clothes:
        if category not in cloth_dict:
            cloth_dict[category] = []
            
        cloth_dict[category].append(name)
    
    cnt = 1
    
    for key, value in cloth_dict.items():
        cnt *= len(value) + 1
        
    return cnt - 1