package iso53.talento.service;

import iso53.talento.model.Image;
import iso53.talento.repository.IImageRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ImageService {

    private final IImageRepository iImageRepository;

    @Autowired
    public ImageService(IImageRepository iImageRepository) {
        this.iImageRepository = iImageRepository;
    }

    public List<Image> findAll() {
        return iImageRepository.findAll();
    }

    public Image findById(ObjectId ID) {
        return iImageRepository.findById(ID).orElse(null);
    }

    public Image save(Image image) {
        return iImageRepository.save(image);
    }

    public boolean existByID(ObjectId ID) {
        return iImageRepository.existsById(ID);
    }
}

