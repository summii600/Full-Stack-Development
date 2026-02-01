/*
Title: Program on Classes and Objects (Encapsulation)
Name: Mirza Sumaiya
Branch: AI&DS
UIN: 241A014
*/
public class Class1 {
    // Fields (Variables)
    int n;
    String s;
    // Default Constructor
    public Class1() {
        System.out.println("Default Constructor");
        System.out.println("n=" + n + " s=" + s);
    }
    // Setter method for n
    public void setN(int n1) {
        n = n1;
    }
    // Setter method for s
    public void setS(String s1) {
        s = s1;
    }
    // Getter method for n
    public int getN() {
        return n;
    }
    // Getter method for s
    public String getS() {
        return s;
    }
    // Main Method
    public static void main(String args[]) {
        // Creating an object of Class1
        Class1 c1 = new Class1();
        // Setting values using setter methods
        c1.setN(12);
        c1.setS("Hello");
        // Getting and printing values using getter methods
        System.out.println("n=" + c1.getN());
        System.out.println("s=" + c1.getS());
    }
}
