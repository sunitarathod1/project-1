package collections;

import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;


public class iterator {

	public static void main(String[] args) {
		
		List l = new ArrayList();
		
		l.add(101);
		l.add("sunita");
		l.add("santosh");
		
		System.out.println(l);
		
		Iterator itr = l.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		

	}

}
