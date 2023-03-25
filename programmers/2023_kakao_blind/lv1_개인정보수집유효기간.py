def solution(today, terms, privacies):
    dict = {}
    answer = []
    
    # 문자열 date를 받아 day 수로 계산하는 함수
    def dateToDay(date):
        Y, M, N = map(int, date.split("."))
        return (Y * 12 * 28) + (M * 28) + N
        
    # 약관 종류에 따른 유효 날짜를 dict에 저장
    for term in terms:
        term_pair = term.split(" ")
        dict[term_pair[0]] = int(term_pair[1]) * 28

    # 오늘의 날 수
    day_today = dateToDay(today)
    
    for i in range(len(privacies)):
        date, term = privacies[i].split(" ")
        if dateToDay(date) + dict[term] <= day_today:
            answer.append(i+1)
    
    return answer