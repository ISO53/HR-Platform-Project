package iso53.talento.controller;

import iso53.talento.model.Advert;
import iso53.talento.service.AdvertService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/advert")
public class AdvertController {

    @Autowired
    private AdvertService advertService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Advert>> getAllAdverts() {
        return ResponseEntity.ok().body(advertService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Advert> getAdvertById(@PathVariable("id") String id) {
        Advert advert = advertService.findById(new ObjectId(id));

        return advert == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(advert, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Advert> createAdvert(@RequestBody Advert advert) {
        try {
            Advert _advert = advertService.save(advert);

            return new ResponseEntity<>(_advert, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Advert> updateAdvert(@PathVariable("id") String id, @RequestBody Advert advert) {
        if (!advertService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(advertService.save(advert), HttpStatus.OK);
    }
}
