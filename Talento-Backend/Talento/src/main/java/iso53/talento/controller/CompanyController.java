package iso53.talento.controller;

import iso53.talento.model.Company;
import iso53.talento.service.CompanyService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

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
    public ResponseEntity<Company> createCompany(@RequestParam String companyName) {
        try {
            Company _company = companyService.save(new Company(companyName));

            return new ResponseEntity<>(_company, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable("id") String id, @RequestBody Company company) {
        if (!companyService.existByID(new ObjectId(id))) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(companyService.save(company), HttpStatus.OK);
    }
}
