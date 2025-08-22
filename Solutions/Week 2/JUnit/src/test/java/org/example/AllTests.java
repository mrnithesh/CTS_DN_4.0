package org.example;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses ({AssertionsTests.class, CalculatorTest.class})
public class AllTests {
}
