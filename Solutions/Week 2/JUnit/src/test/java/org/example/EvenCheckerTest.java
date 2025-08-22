package org.example;
import org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.Assert.*;
public class EvenCheckerTest {
    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6})
    void testIsEven(int value) {
        EvenChecker checker = new EvenChecker();
        assertTrue(checker.isEven(value));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 3, 5})
    void testIsNotEven(int value) {
        EvenChecker checker = new EvenChecker();
        assertFalse(checker.isEven(value));
    }

}
