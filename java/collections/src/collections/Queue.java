import java.util.*;
public class Queue {
    public static void main(String[] args) {
        PriorityQueue<String> enames = new PriorityQueue<String>();
        System.out.println(enames.offer("Sunita"));
        System.out.println(enames.add("Rathod"));
        enames.add("Rahul");
        enames.add("Sonia");
        enames.add("Modi");
        enames.add("sanjay");
        System.out.println(enames);
        enames.poll();
        System.out.println(enames);
        enames.remove();
        System.out.println(enames);
        enames.add("santosh");
        System.out.println(enames);
        enames.peek();
        System.out.println(enames);
        
    }
    
}
