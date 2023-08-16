package programmers;

import java.util.*;

class Solution {
    public boolean solution(int x) {
        
        int xLen = (int) (Math.log10(x) + 1); // 숫자형의 길이를 구하는 방법.
        int digitSum = 0;
        int originX = x;
        
        ArrayList<Integer> arrDigitNum = new ArrayList<>();
        
        // 숫자의 각 자리수를 ArrayList에 담는 방법.
        while(x > 0) {
            System.out.println(x);
            arrDigitNum.add(x % 10);
            x /= 10;
        }
        
        for(int digit: arrDigitNum) {
            digitSum += digit;
        }
        System.out.println(arrDigitNum.toString());
        
        boolean answer = false;
        if (originX % digitSum == 0) {
            answer = true;    
        }
        
        return answer;
    }
}