/*
Title: Constructor and Method Overloading
Name: Mirza Sumaiya
Team: Code Crafters
Concept: Polymorphism in Java
*/
class Student {
    String name;
    int roll_no;
    double marks;

    // Default Constructor
    public Student() {
        System.out.println("Default Constructor");
        System.out.println("Default value of name and roll_no: " + name + " " + roll_no);
    }

    // Constructor Overloading (2 Parameters)
    public Student(String name, int roll_no) {
        this.name = name;
        this.roll_no = roll_no;
        System.out.println("2-Param Constructor: " + name + ", Roll: " + roll_no);
    }

    // Constructor Overloading (3 Parameters)
    public Student(String name, int roll_no, double marks) {
        this.name = name;
        this.roll_no = roll_no;
        this.marks = marks;
        System.out.println("3-Param Constructor: " + name + ", Roll: " + roll_no + ", Marks: " + marks);
    }
}

class B {
    // Method Overloading (Circle)
    public void area(int r) {
        System.out.println("Area of circle: " + (3.14 * r * r));
    }

    // Method Overloading (Rectangle)
    public void area(int l, int b) {
        System.out.println("Area of rectangle: " + (l * b));
    }
}

public class Class2 {
    public static void main(String arg[]) {
        // Testing Constructor Overloading
        Student s1 = new Student();
        Student s2 = new Student("akshay", 1);
        Student s3 = new Student("nilesh", 2, 90.2);
        // Testing Method Overloading
        B b1 = new B();
        b1.area(10);        // Calls circle area
        b1.area(10, 20);    // Calls rectangle area
        // Command Line Arguments Logic
        if(arg.length >= 3) {
            int r = Integer.parseInt(arg[0]);
            int l = Integer.parseInt(arg[1]);
            int b = Integer.parseInt(arg[2]);
            System.out.println("\n--- Results from Command Line Args ---");
            b1.area(r);
            b1.area(l, b);
        } else {
            System.out.println("\nNote: Pass 3 numbers as arguments to see command line logic.");
        }
    }
}
