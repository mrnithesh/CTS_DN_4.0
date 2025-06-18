public class FinancialForecast {

    public static double forecast(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue; // base case
        }

        // recursion
        return forecast(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initial = 10000;
        double rate = 0.10;
        int years = 5;
        System.out.println("Initial value: "+initial+"\nGrowth Rate: "+ rate +"\nYears: "+years);
        double futureValue = forecast(initial, rate, years);
        System.out.println("Future value after " + years + " years: "+ futureValue);
    }
}
