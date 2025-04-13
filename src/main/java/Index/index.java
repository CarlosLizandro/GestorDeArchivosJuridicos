package Index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class index {

    @GetMapping
    public String mostrarVista(Model modeloJefe) {
        return "index";
    }
}
