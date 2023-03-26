def solution(id_list, report, k):
    report_dict = {}
    reported_dict = {}
    
    for i in report:
        reporter, reported = i.split(" ")
        
        # reported_dict 예외처리 - 한 유저가 같은 유저를 여러 번 신고한 경우
        if reported in report_dict.get(reporter, ""):
            continue
                
        # 신고당한 횟수를 증가
        reported_dict[reported] = reported_dict.get(reported, 0) + 1
        
        # report_dict 초기화 - 신고자의 value값을 set으로 저장
        if reporter not in report_dict:
            report_dict[reporter] = set()
        
        # report_dict - 신고자를 key, 신고자가 신고한 사람들을 value로 저장
        # 이 부분이 약간 헷갈렸는데 리스트를 value값을 줬으므로 그 참조값에다가 add 시켜주면 된다.
        report_dict[reporter].add(reported)
        
    
    
    answer = []
    for user_id in id_list:
        cnt = 0
        reported = report_dict.get(user_id, False)
        
        if reported == False:
            answer.append(cnt)
            continue
            
        for reported_id in reported:
            if reported_dict.get(reported_id, 0) >= k:
                cnt += 1
        answer.append(cnt)
        
    return answer