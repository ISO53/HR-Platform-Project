package iso53.talento.service;

import iso53.talento.model.Image;
import iso53.talento.repository.IImageRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

@Service
public class ImageService {

    public static final String IMAGE_DIRECTORY = "C:/Users/termi/Desktop/Diğer/images";

    private final IImageRepository iImageRepository;

    @Autowired
    public ImageService(IImageRepository iImageRepository) {
        this.iImageRepository = iImageRepository;
    }

    public String save(String uploadDirectory, MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID() + "_" + imageFile.getOriginalFilename();

        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }

    public byte[] get(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            return Files.readAllBytes(imagePath);
        } else {
            return null; // Handle missing images
        }
    }

    public void deleteFromDisk(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            Files.delete(imagePath);
        }
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

