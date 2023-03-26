import re

def solution(new_id):
    #1
    new_id = new_id.lower()
    
    #2 - 소문자, 숫자, 뺴기, 언더바, 마침표를 제외한 문자열만 찾기
    new_id = ''.join(re.findall(r'[a-z0-9]|[-_.]', new_id))
    
    #3 - 온점이 2개 이상 있으면 온점 하나로 치환
    new_id = re.sub('\.+', '.', new_id)
    
    #4 - 온점이 처음이나 끝에 위치한다면 제거
    new_id = re.sub('^\.|\.$', '', new_id)
    
    #5 - 길이가 0이라면 'a'
    if len(new_id) == 0:
        new_id = 'a'
    
    #6 - 길이가 16자 이상이면 15자까지, 온점 다시 체크
    if len(new_id) >= 16:
        new_id = new_id[:15]
        new_id = re.sub('\.$', '', new_id)
    
    #7 - 2자 이하라면 new_id의 마지막 문자를 길이가 3이될 때까지 붙이기
    if len(new_id) <= 2:
        new_id += new_id[-1] * (3-len(new_id))
        
    return new_id