
// import java.util.Set;
import java.util.HashSet;
import java.util.Set;

class Set1{
    public static void main(String[] args){
        HashSet hs1 = new HashSet();
        Set<Integer> hs2 = new HashSet<Integer>();
        hs1.add(101);
        hs1.add(102);
        hs1.add(175);
        hs1.add(204);
        System.out.println(hs1);
        hs2.add(null);
        hs2.add(101);
        hs2.add(204);

        hs2.add(205);
        hs2.add(101);
        System.out.println(hs2);
        hs1.addAll(hs2);
        System.out.println(hs1);
        hs1.retainAll(hs2);
        System.out.println(hs1);
        hs1.removeAll(hs2);
        System.out.println(hs1);



    }
}

    

