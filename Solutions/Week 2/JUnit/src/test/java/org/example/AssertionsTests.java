package org.example;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assumptions.*;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTests {

    @Test
    public void testAssertions() {

        assertEquals(5, 2 + 3);

        assertTrue(5 > 3);

        assumeFalse(5 < 3);

        Object obj1 = null;
        assertNull(obj1);

        Object obj2 = new Object();
        assertNotNull(obj2);
    }
}

