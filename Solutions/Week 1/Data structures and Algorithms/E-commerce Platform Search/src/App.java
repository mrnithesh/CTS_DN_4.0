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

    public static Product BinarySearch(Product[] products, int target){
        int left = 0;
        int right = products.length-1;
        while (left<=right){
            int mid = (left+right) / 2;
            if (products[mid].productID == target){
                return products[mid];
            }
            else if (products[mid].productID < target){
                left = mid+1;
            }
            else{
                right = mid -1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {new Product(11,"Apple Watch","Electronics"),
        new Product(12, "Ooty Apple", "Fruits"),
        new Product(19, "KitKat", "Chocoloates")
        };
        System.out.println("Linear Search");
        Product pr1 = LinearSearch(products,12);
        if (pr1!= null){
            System.out.println("Product found!");
            System.out.println("Product id :"+ pr1.productID+"\nProdcut Name: "+ pr1.productName +"\nProduct Category:"+ pr1.category);
        }
        else{
            System.out.println("Product not found");
        }

        System.out.println("Binary Search");
        Product pr2 = BinarySearch(products,19);
        if (pr2!= null){
            System.out.println("Product found!");
            System.out.println("Product id :"+ pr2.productID+"\nProdcut Name: "+ pr2.productName +"\nProduct Category:"+ pr2.category);
        }
        else{
            System.out.println("Product not found");
        }
    }
}
