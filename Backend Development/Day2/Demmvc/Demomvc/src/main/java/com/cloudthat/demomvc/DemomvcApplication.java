import org.springframework.beans.factory.annotation.Value; org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation. RestController;
import @RestController no usages CT-vishwas
@RestController public class HelloController {

    @Value("${user}")
    private String user;

    @GetMapping("/")
    public String helloWorld() {
        return "Hello " + user + ", Welome to Spring sessions.";
    }
}
