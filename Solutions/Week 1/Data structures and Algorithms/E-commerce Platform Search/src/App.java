class Product{
    int productID;
    String productName;
    String category;
    public Product(int productID, String productName, String category) {
        this.productID = productID;
        this.productName = productName;
        this.category = category;
    }
}

public class App {

    public static Product LinearSearch(Product[] products, int target){
        for (int i=0; i<products.length; i++){
            if (products[i].productID == target){
                return products[i];
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {new Product(11,"Apple Watch","Electronics"),
        new Product(12, "Ooty Apple", "Fruits"),
        new Product(19, "KitKat", "Chocoloates")
        };

        Product pr = LinearSearch(products,12);
        if (pr!= null){
            System.out.println("Product found!");
            System.out.println("Product id :"+ pr.productID+"\nProdcut Name: "+ pr.productName +"\nProduct Category:"+ pr.category);
        }
        else{
            System.out.println("Product not found");
        }
    }
}
