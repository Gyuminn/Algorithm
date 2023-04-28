from collections import deque

def solution(begin, target, words):
    # target이 words에 없는 경우
    if target not in words:
        return 0
    
    # words 리스트에 begin을 추가
    words.append(begin)
    # 1글자씩 변환이 가능한 경우를 인접 리스트로 생성
    graph = [[] for _ in range(len(words))]
    for i in range(len(words)):
        for j in range(i+1, len(words)):
            cnt = 0
            for k in range(len(words[i])):
                # i 문자와 j문자를 비교해서 한글자 이하로 바꿀 수 있다면 인접리스트에 추가
                if cnt > 1:
                    break
                if words[i][k] != words[j][k]:
                    cnt += 1
            if cnt <= 1:
                graph[i].append(words[j])
                graph[j].append(words[i])
                
    # begin부터 시작해서 BFS 탐색
    queue = deque()
    queue.append([words[-1], 0])
    visited = [0 for _ in range(len(words))]
    visited[-1] = 1
    index_dict = dict()
    
    for idx, word in enumerate(words):
        index_dict[word] = idx
    
    while queue:
        [v,cnt] = queue.popleft()
        if v == target:
            return cnt
        
        v_idx = index_dict.get(v)
        for i in range(len(graph[v_idx])):
            nv = graph[v_idx][i]
            nv_idx = index_dict.get(nv)
            # 방문한 적이 없다면
            if visited[nv_idx] == 0:
                visited[nv_idx] = 1
                queue.append([nv, cnt + 1])
    
    return cnt