package iso53.talento.controller;

import iso53.talento.model.Image;
import iso53.talento.service.ImageService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Image>> getAllImages() {
        return ResponseEntity.ok().body(imageService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Image> getImageById(@PathVariable("id") String id) {
        Image image = imageService.findById(new ObjectId(id));

        return image == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(image, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Image> createImage(@RequestBody Image image) {
        try {
            Image _image = imageService.save(image);

            return new ResponseEntity<>(_image, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Image> updateImage(@PathVariable("id") String id, @RequestBody Image image) {
        if (!imageService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(imageService.save(image), HttpStatus.OK);
    }
}
