def solution(phone_book):
    phone_dict = dict()
    
    for phone_number in phone_book:
        phone_dict[phone_number] = 1
        
    for phone_number in phone_dict:
        temp = ""
        for num in phone_number:
            temp += num
            if temp in phone_dict and temp != phone_number:
                return False
    return True