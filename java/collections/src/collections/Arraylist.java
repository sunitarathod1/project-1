package collections;

import java.util.ArrayList;

public class Arraylist {

	public static void main(String[] args) {
		ArrayList al1 = new ArrayList();
		al1.add(101);
		al1.add(102);
		al1.add(103);
		
		System.out.println(al1);
		
		ArrayList al2 = new ArrayList();
		al2.add("sunita");
		al2.add("rathod");
		
		System.out.println(al2);
		al1.addAll(al2);
		
		System.out.println(al1);
		

	}

}
