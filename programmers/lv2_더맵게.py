from heapq import heapify, heappush, heappop

def solution(scoville, K):
    heap = scoville[:]
    heapify(heap)
    
    cnt = 0
    while heap[0] < K:
        smallest = heappop(heap)
        next_smallest = heappop(heap)
        
        new_scoville = smallest + (next_smallest * 2)
        heappush(heap, new_scoville)
        cnt += 1
        if len(heap) == 1 and heap[0] < K:
            return -1
            
    return cnt