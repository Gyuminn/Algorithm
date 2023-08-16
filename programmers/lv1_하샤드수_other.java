package programmers;

import java.util.*;

class Solution {
    public boolean solution(int x) {
        String[] tmp = String.valueOf(x).split("");
        
        System.out.println(Arrays.toString(tmp));
        
        int digitSum = 0;
        for (String s: tmp) {
            digitSum += Integer.parseInt(s);
        }
        
        System.out.println(digitSum);
        
        boolean answer = false;
        if (x % digitSum == 0) {
            answer = true;
        }
        
        return answer;
    }
}