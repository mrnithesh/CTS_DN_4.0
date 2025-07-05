package org.example;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.junit.Assume.*;

public class AssertionsTests {

    @Test
    public void testAssertions() {

        assertEquals(5, 2 + 3);

        assertTrue(5 > 3);

        assumeFalse(5 > 3);

        Object obj1 = null;
        assertNull(obj1);

        Object obj2 = new Object();
        assertNotNull(obj2);
    }
}

