package iso53.talento.controller;

import iso53.talento.model.Company;
import iso53.talento.model.Image;
import iso53.talento.model.User;
import iso53.talento.service.CompanyService;
import iso53.talento.service.ImageService;
import iso53.talento.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private UserService userService;

    @Autowired
    private ImageService imageService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Company>> getAllCompanies() {
        return ResponseEntity.ok().body(companyService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("id") String id) {
        Company company = companyService.findById(new ObjectId(id));

        return company == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(company, HttpStatus.FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<Company> createCompany(@RequestParam String companyName, @RequestParam MultipartFile image) {
        try {
            String fileName = imageService.save(ImageService.IMAGE_DIRECTORY, image);
            Image _image = new Image(fileName);

            Image createdImage = imageService.save(_image);

            Company _company = companyService.save(new Company(companyName, createdImage.getImageId()));

            return new ResponseEntity<>(_company, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestParam String companyId, @RequestParam String userId) {
        try {
            User user = userService.findById(new ObjectId(userId));

            if (user == null) {
                return new ResponseEntity<>("User not found!", HttpStatus.NOT_FOUND);
            }

            Company company = companyService.findById(new ObjectId(companyId));

            if (company == null) {
                return new ResponseEntity<>("Company not found", HttpStatus.NOT_FOUND);
            }

            company.getUserIDs().add(new ObjectId(userId));

            Company _company = companyService.save(company);

            return new ResponseEntity<>(_company, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
