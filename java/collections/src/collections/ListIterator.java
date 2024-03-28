package collections;

import java.util.ArrayList;
import java.util.List;


public class ListIterator {

	public static void main(String[] args) {
		
		List l= new ArrayList();
		l.add(101);
		l.add("sunita");
		l.add("santosh");
		
		System.out.println(l);
		
		java.util.ListIterator ltr = l.listIterator();
		while(ltr.hasNext()) {
			System.out.println(ltr.next());
		}
		
		
		
	 

	}

}
