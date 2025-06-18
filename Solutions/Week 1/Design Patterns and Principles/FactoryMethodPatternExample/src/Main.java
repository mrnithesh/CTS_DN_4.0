abstract class DocumentFactory{
    abstract Document createDocument(); //abstract class for docuement factory
}

class WordDocumentFactory extends DocumentFactory{
    public Document createDocument(){ //overriding createdocument method to create each document
        return new WordDocument();
    }
}

class PDFDocumentFactory extends DocumentFactory{
    public  Document createDocument(){
        return new PDFDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new ExcelDocument();
    }
}

public class Main {
    public static void main(String[] args) { //testing the implementation
        WordDocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        System.out.println("Created a document of type: " + wordDoc.getClass().getSimpleName());

        PDFDocumentFactory pdfFactory = new PDFDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        System.out.println("Created a document of type: " + pdfDoc.getClass().getSimpleName());

        ExcelDocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        System.out.println("Created a document of type: " + excelDoc.getClass().getSimpleName());
    }
}
