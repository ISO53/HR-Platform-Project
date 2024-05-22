package iso53.talento.controller;

import iso53.talento.model.Application;
import iso53.talento.service.ApplicationService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Application>> getAllApplications() {
        return ResponseEntity.ok().body(applicationService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable("id") String id) {
        Application application = applicationService.findById(new ObjectId(id));

        return application == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(application, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Application> createApplication(@RequestBody ApplicationDTO applicationDTO) {
        try {
            Application application = applicationService.save(new Application(
                    applicationDTO.advertID(),
                    applicationDTO.userID(),
                    applicationDTO.name(),
                    applicationDTO.surname(),
                    applicationDTO.email(),
                    applicationDTO.address(),
                    applicationDTO.undergraduateEducation(),
                    applicationDTO.mastersDegreeOrDoctorate(),
                    applicationDTO.dateOfGraduation(),
                    applicationDTO.businessExperience(),
                    applicationDTO.githubUrl(),
                    applicationDTO.skills(),
                    applicationDTO.certificates(),
                    applicationDTO.languages(),
                    ""
            ));

            return new ResponseEntity<>(application, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable("id") String id,
                                                         @RequestBody Application application) {
        if (!applicationService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(applicationService.save(application), HttpStatus.OK);
    }

    public record ApplicationDTO(ObjectId advertID, ObjectId userID, String name,
                                 String surname, String email, String address, String undergraduateEducation,
                                 String mastersDegreeOrDoctorate, String dateOfGraduation,
                                 List<String> businessExperience, String githubUrl, List<String> skills,
                                 List<String> certificates, List<String> languages) {
    }
}
