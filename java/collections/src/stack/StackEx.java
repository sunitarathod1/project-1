import java.util.*;
 public class StackEx{
    public static void main(String[] args) {
        Stack<String>enames = new Stack<>();
        enames.push("Rahul");
        enames.push("Sunita");
        enames.push("Swati");
        enames.push("preeti");
        System.out.println(enames);
        enames.pop();
        System.out.println(enames);
    }
}