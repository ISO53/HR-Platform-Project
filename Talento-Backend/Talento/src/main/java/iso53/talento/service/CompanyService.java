package iso53.talento.service;

import iso53.talento.model.Company;
import iso53.talento.repository.ICompanyRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CompanyService {

    private final ICompanyRepository iCompanyRepository;

    @Autowired
    public CompanyService(ICompanyRepository iCompanyRepository) {
        this.iCompanyRepository = iCompanyRepository;
    }

    public List<Company> findAll() {
        return iCompanyRepository.findAll();
    }

    public Company findById(ObjectId ID) {
        return iCompanyRepository.findById(ID).orElse(null);
    }

    public Company save(Company company) {
        return iCompanyRepository.save(company);
    }

    public boolean existByID(ObjectId ID) {
        return iCompanyRepository.existsById(ID);
    }
}

