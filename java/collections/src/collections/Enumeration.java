package collections;
import java.util.Stack;


public class Enumeration {

	public static void main(String[] args) {
		Stack s=new Stack();
		s.add(10);
		s.add("sunita");
		s.add("Rathod");
		
		java.util.Enumeration e = s.elements();
		while(e.hasMoreElements()) {
			System.out.println(e.nextElement());
		}
		
		

	}

}
