package iso53.talento.controller;

import iso53.talento.model.Interview;
import iso53.talento.service.InterviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/interview")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Interview>> getAllInterviews() {
        return ResponseEntity.ok().body(interviewService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Interview> getInterviewById(@PathVariable("id") String id) {
        Interview interview = interviewService.findById(new ObjectId(id));

        return interview == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(interview, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Interview> createInterview(@RequestBody Interview interview) {
        try {
            Interview _interview = interviewService.save(interview);

            return new ResponseEntity<>(_interview, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Interview> updateInterview(@PathVariable("id") String id, @RequestBody Interview interview) {
        if (!interviewService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(interviewService.save(interview), HttpStatus.OK);
    }
}
