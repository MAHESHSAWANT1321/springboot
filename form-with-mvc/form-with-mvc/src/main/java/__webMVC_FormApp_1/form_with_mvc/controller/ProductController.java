package __webMVC_FormApp_1.form_with_mvc.controller;

import __webMVC_FormApp_1.form_with_mvc.model.Product;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")  // Correct CORS origin
public class ProductController {

    // Use @PostMapping to handle POST requests
    @PostMapping
    public String getProducts(@RequestBody Product product) {
        System.out.println("Received Product : " + product);
        return "Product '" + product.getProductName() + "' successfully received!";
    }
}
