import time

start_time = time.time()

def solution(orders, course):
    answer = []

    dict = {}
    
    # dfs로 가능한 조합을 구해 dict에 조합이 나온 개수를 저장
    def dfs(level, start, origin, comb, limit):
        if (level == limit):
            dict[comb] = dict.get(comb, 0) + 1
            return
        
        for i in range(start, len(origin)):
            dfs(level + 1, i + 1, origin, comb + origin[i], limit)
    
    # 주어진 코스들을 dfs를 통해 모두 반복
    for order in orders:
        order = sorted(order)
        for limit in range(1, len(order) + 1):
            dfs(0, 0, order, "", limit)
    
    
    for num in course:
        temp = []
        # 지정된 개수에 맞게 코스 요리를 모은다.
        for k,v in dict.items():
            if len(k) == num and v >= 2:
                temp.append((k,v))
        
        # 임시 리스트에 넣어준 값이 있다면 value의 최대값을 먼저 구하고
        # value 최대값과 일치하는 key의 값을 반환하여 answer에 넣어준다.
        if len(temp):
            max_value = max(temp, key=lambda x: x[1])[1]
            result = [x[0] for x in temp if x[1] == max_value]
            
            for i in result:
                answer.append(i)
    
    answer = sorted(answer)
    return answer

end_time = time.time()
print(end_time - start_time)