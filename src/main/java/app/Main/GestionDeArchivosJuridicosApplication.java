package app.Main;

import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class GestionDeArchivosJuridicosApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionDeArchivosJuridicosApplication.class, args);
                System.out.println("HOLA SANDRO SOY DIEGOOOO");
	}

}
