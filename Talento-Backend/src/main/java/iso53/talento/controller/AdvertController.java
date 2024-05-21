package iso53.talento.controller;

import iso53.talento.model.Advert;
import iso53.talento.model.Company;
import iso53.talento.service.AdvertService;
import iso53.talento.service.CompanyService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/advert")
public class AdvertController {

    @Autowired
    private AdvertService advertService;

    @Autowired
    private CompanyService companyService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Advert>> getAllAdverts() {
        return ResponseEntity.ok().body(advertService.findAll());
    }

    @GetMapping("/getAllDetailed")
    public ResponseEntity<List<AdvertResponse>> getAllAdvertsDetailed() {
        List<Advert> advert = advertService.findAll();
        List<AdvertResponse> advertResponses = new ArrayList<>();

        for (Advert adv : advert) {
            advertResponses.add(new AdvertResponse(
                    adv.getAdvertId().toHexString(),
                    companyService.findById(adv.getCompanyId()).getImageUrl(),
                    companyService.findById(adv.getCompanyId()).getCompanyName(),
                    adv.getPosition(),
                    adv.getHeader(),
                    adv.getInformation(),
                    adv.getSkills(),
                    adv.getUploadDate()
            ));
        }

        return ResponseEntity.ok().body(advertResponses);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Advert> getAdvertById(@PathVariable("id") String id) {
        Advert advert = advertService.findById(new ObjectId(id));

        return advert == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(advert, HttpStatus.FOUND);
    }

    @GetMapping("/getDetailed/{id}")
    public ResponseEntity<AdvertResponse> getAdvertDetailedById(@PathVariable("id") String id) {
        Advert advert = advertService.findById(new ObjectId(id));

        return new ResponseEntity<>(new AdvertResponse(
                advert.getAdvertId().toHexString(),
                companyService.findById(advert.getCompanyId()).getImageUrl(),
                companyService.findById(advert.getCompanyId()).getCompanyName(),
                advert.getPosition(),
                advert.getHeader(),
                advert.getInformation(),
                advert.getSkills(),
                advert.getUploadDate()
        ), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createAdvert(@RequestBody AdvertDTO advertDTO) {
        try {
            Company company = companyService.findById(new ObjectId(advertDTO.companyId()));

            if (company == null) {
                return new ResponseEntity<>("Company not found.", HttpStatus.NOT_FOUND);
            }

            Advert advert = new Advert(
                    new ObjectId(advertDTO.companyId()),
                    advertDTO.skills(),
                    advertDTO.position(),
                    advertDTO.header(),
                    advertDTO.information());

            Advert _advert = advertService.save(advert);

            return new ResponseEntity<>(_advert, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public record AdvertDTO(String companyId, List<String> skills, String position, String header, String information) {
    }

    public record AdvertResponse(String id, String imageUrl, String companyName, String position, String header,
                                 String information,
                                 List<String> skills, Date uploadDate) {
    }

}
