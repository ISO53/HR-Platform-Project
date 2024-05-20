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
    public ResponseEntity<Application> createApplication(@RequestBody Application application) {
        try {
            Application _application = applicationService.save(application);

            return new ResponseEntity<>(_application, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable("id") String id, @RequestBody Application application) {
        if (!applicationService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(applicationService.save(application), HttpStatus.OK);
    }
}
