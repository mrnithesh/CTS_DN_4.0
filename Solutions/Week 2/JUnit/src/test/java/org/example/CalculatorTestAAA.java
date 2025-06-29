package org.example;
import org.junit.*;

import static org.junit.Assert.*;
public class CalculatorTestAAA {
    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup before each test");
    }

    @After
    public void tearDown() {
        //teardown
        System.out.println("Cleanup after each test");
    }

    @Test
    public void testAdd() {

        int result = calc.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(10, 6);
        assertEquals(4, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(5, 0);
    }
}
