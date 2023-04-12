def solution(participant, completion):
    participant_dict = dict()
    
    for i in participant:
        participant_dict[i] = participant_dict.get(i, 0) + 1
    
    for i in completion:
        if participant_dict[i] > 1:
            participant_dict[i] = participant_dict.get(i) - 1
        else:
            del participant_dict[i]
    
    return list(participant_dict.keys())[0]