import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class Assignment {
    public static void main(String[] args) {
        Set<String> s1 = new HashSet<String>();
        s1.add("rahul");
        s1.add("shruti");
        s1.add("rathod");
        s1.add("advika");
        System.out.println(s1);
        ArrayList<String> names = new ArrayList<String>(s1);
        Collections.sort(names);
        System.out.println(names);
        Collections.sort(names,Collections.reverseOrder());
        System.out.println(names);
        // Collections.sort(names,Collections.reverse(names));
    }
    
}
