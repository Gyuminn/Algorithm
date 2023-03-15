# count(n)이 시간복잡도가 O(n)이기 떄문에 이 풀이는 O(n^2)이므로 그렇게 좋은 코드는 아닌 것 같다.
def solution(N, stages):
    result = {}
    challenge_players = len(stages)
    
    for stage in range(1, N + 1):
        if challenge_players != 0:
            not_clear_players = stages.count(stage)
            result[stage] = not_clear_players / challenge_players
            challenge_players -= not_clear_players
        else:
            result[stage] = 0
    
    answer = sorted(result, key = lambda x:result[x], reverse=True)
    return answer