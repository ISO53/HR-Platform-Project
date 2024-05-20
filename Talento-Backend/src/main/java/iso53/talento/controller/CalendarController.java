package iso53.talento.controller;

import iso53.talento.model.Calendar;
import iso53.talento.service.CalendarService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendar")
public class CalendarController {

    @Autowired
    private CalendarService calendarService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Calendar>> getAllCalendars() {
        return ResponseEntity.ok().body(calendarService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Calendar> getCalendarById(@PathVariable("id") String id) {
        Calendar calendar = calendarService.findById(new ObjectId(id));

        return calendar == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(calendar, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Calendar> createCalendar(@RequestBody Calendar calendar) {
        try {
            Calendar _calendar = calendarService.save(calendar);

            return new ResponseEntity<>(_calendar, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Calendar> updateCalendar(@PathVariable("id") String id, @RequestBody Calendar calendar) {
        if (!calendarService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(calendarService.save(calendar), HttpStatus.OK);
    }
}
