package iso53.talento.service;

import iso53.talento.model.Advert;
import iso53.talento.repository.IAdvertRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AdvertService {

    private final IAdvertRepository iAdvertRepository;

    @Autowired
    public AdvertService(IAdvertRepository iAdvertRepository) {
        this.iAdvertRepository = iAdvertRepository;
    }

    public List<Advert> findAll() {
        return iAdvertRepository.findAll();
    }

    public Advert findById(ObjectId ID) {
        return iAdvertRepository.findById(ID).orElse(null);
    }

    public Advert save(Advert advert) {
        return iAdvertRepository.save(advert);
    }

    public boolean existByID(ObjectId ID) {
        return iAdvertRepository.existsById(ID);
    }
}

