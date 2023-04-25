from heapq import heappush, heappop

def solution(operations):
    min_heap = []
    max_heap = []
    
    for operation in operations:
        [cmd, data] = operation.split(" ")
        
        if cmd == "I":
            heappush(min_heap, int(data))
            heappush(max_heap, (-int(data), int(data)))
        else:
            if len(min_heap) == 0:
                continue
            elif data == "1":
                max_value = heappop(max_heap)[1]
                min_heap.remove(max_value)
            elif data == "-1":
                min_value = heappop(min_heap)
                max_heap.remove((-min_value, min_value))
                
    return [heappop(max_heap)[1], heappop(min_heap)] if min_heap else [0,0]