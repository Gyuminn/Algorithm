def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        binary1 = bin(arr1[i])[2:].zfill(n)
        binary2 = bin(arr2[i])[2:].zfill(n)
        
        row = ''
        for j in range(n):
            if binary1[j] == '1' or binary2[j] == '1':
                row += '#'
            else:
                row += ' '
        answer.append(row)
        
    return answer