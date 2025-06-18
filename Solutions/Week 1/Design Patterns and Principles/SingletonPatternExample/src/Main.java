public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.Log("Test Message");
        logger2.Log("Antoher Message here");
        if (logger1 == logger2){ // testing here
            System.out.println("Both instancea are same");
        }
        else{
            System.out.println("Both instance are not smae");
        }
    }
}
