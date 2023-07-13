import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Hello {
    public static void main(String[] args) {
        List<String> array = new ArrayList<>();
        array.add("눈사람");
        array.add("얼음");
        array.add("눈");
        array.add("바람");

        StringBuilder str = new StringBuilder();
        /*
        for(String s : array) {
            // 단일책임의 원칙을 위배중..
            // stream은 한번에 한가지 일만 하기 때문에 사용하면 유지보수 등에 좋다

            System.out.println("<li>" + s + "</li>"); // 출력
            str.append("<li>" + s + "</li>"); // 삽입
        }
         */

        List<String> newList = new ArrayList<String>();
        for(String s: array){
           newList.add("<li>" + s + "</li>");
        }

        List<String> newArray = array.parallelStream()
                                     .map(s->"<li>" + s + "</li>") // 자바 map이 아님,, 변환하는 과정..
                                     .collect(Collectors.toList());

        List<Integer> array2 = new ArrayList<>();
        array2.add(1);
        array2.add(2);
        array2.add(3);
        array2.add(4);
        array2.add(5);
        array2.add(6);

        // 홀수를 날리는 코드 -> 직관적이지는 않다
        List<Integer> newArray2 = new ArrayList<>();
        for(int v : newArray2){
            if(v%2==0){
                newArray2.add(v);
            }
        }

        // stream()을 이용하면 보다 직관적인 코드를 확인 할 수 있다
        // filter에 해당하는 값만 통과.. 해당하지 않으면 제거한다
        List<Integer> newArray3 = array2.stream()
                                        .filter(v -> v%2==0)
                                        .toList();
    }
}