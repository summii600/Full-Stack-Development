/*
Title: Advanced OOPs - Inheritance, Interfaces, and Exception Handling
Name: Mirza Sumaiya Shakil Ahmed
UIN: 241A014
Branch: AI&DS
*/

import java.util.*;

// Base Class
class A {
    private int i;
    private String s;

    public A() {
        System.out.println("Inside Default Constructor of A by Sumaiya, 241A014");
    }

    public void setI(int i) { this.i = i; }
    public void setS(String s) { this.s = s; }
    public int getI() { return i; }
    public String getS() { return s; }

    public void display() {
        System.out.println("Display function inside Class A");
    }
}

// Single Inheritance (B inherits A)
class B extends A {
    public B() {
        System.out.println("Inside Default Constructor of B");
    }

    @Override
    public void display() {
        System.out.println("Display function inside Class B (Overridden)");
    }
}

// Multilevel Inheritance (C inherits B)
class C extends B {
    public C() {
        System.out.println("Inside constructor of C");
    }

    @Override
    public void display() {
        System.out.println("Display function inside Class C (Overridden)");
    }
}

// Interfaces for Multiple Inheritance
interface D1 {
    void display1();
}

interface D2 {
    void display2();
}

// Hybrid Inheritance: D extends A and implements D1, D2
class D extends A implements D1, D2 {
    public void display1() {
        System.out.println("Display1 of interface D1");
    }

    public void display2() {
        System.out.println("Display2 of interface D2");
    }
}

public class Class3 {
    public static void main(String args[]) {
        // --- Inheritance Section ---
        System.out.println("--- Starting Inheritance Demo ---");
        
        System.out.println("\nCalling constructor of A:");
        A a = new A();

        System.out.println("\nCalling constructor of B:");
        B b = new B();

        System.out.println("\nCalling constructor of C:");
        C c = new C();

        System.out.println("\nCalling constructor of D:");
        D d = new D();

        System.out.println("\n--- Testing Methods ---");
        d.display();  // Inherited from A
        d.display1(); // From interface D1
        d.display2(); // From interface D2

        a.setS("Sumaiya");
        a.setI(14);
        System.out.println("Class A Values: " + a.getS() + ", " + a.getI());

        a.display(); 
        b.display(); 
        c.display(); 

        // --- Exception Handling Section ---
        System.out.println("\n--- Starting Exception Handling Demo ---");
        try {
            int data = 50 / 0; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Exception Caught: Division by zero is not allowed.");
        } finally {
            System.out.println("Finally block executed: Cleanup successful.");
        }

        System.out.println("\nProgram Finished Successfully.");
    }
}
