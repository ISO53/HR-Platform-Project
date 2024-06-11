package iso53.talento.service;

import iso53.talento.model.Application;
import iso53.talento.repository.IApplicationRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final IApplicationRepository iApplicationRepository;

    @Autowired
    public ApplicationService(IApplicationRepository iApplicationRepository) {
        this.iApplicationRepository = iApplicationRepository;
    }

    public List<Application> findAll() {
        return iApplicationRepository.findAll();
    }

    public Application findById(ObjectId ID) {
        return iApplicationRepository.findById(ID).orElse(null);
    }

    public Application save(Application application) {
        return iApplicationRepository.save(application);
    }

    public boolean existByID(ObjectId ID) {
        return iApplicationRepository.existsById(ID);
    }
}

