public class Logger {
    public static Logger instance;

    private Logger(){
        System.out.println("Instance has been constructed sucessfully");
    }
    //follows singleton pattern here, allows only one instance
    public static Logger getInstance(){
        if (instance == null){
            instance = new Logger();
            return instance;
        }
        return instance;
    }

    public void Log(String message){
        System.out.println(message);
    }
}
