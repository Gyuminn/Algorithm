def solution(word):
    word_set = set()
    aeiou_list = ["A", "E", "I", "O", "U"]
    visited = [False] * 5
    
    def dfs(L, temp, word_set, aeiou_list, limit):
        if L == limit:
            word_set.add(temp)
        else:
            for i in range(5):
                if visited[i] == False:
                    visited[i] == True
                    dfs(L + 1, temp + aeiou_list[i], word_set, aeiou_list, limit)
                    visited[i] == False
    
    for limit in range(1,6):
        dfs(0, "", word_set, aeiou_list, limit)
    
    word_list = list(sorted(word_set))
    
    return word_list.index(word) + 1