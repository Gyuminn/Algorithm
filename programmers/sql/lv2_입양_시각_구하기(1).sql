-- 코드를 입력하세요
SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT
FROM ANIMAL_OUTS
WHERE DATE_FORMAT(DATETIME, '%H%m') BETWEEN '0900' AND '1959'
GROUP BY HOUR(DATETIME)
ORDER BY HOUR(DATETIME)