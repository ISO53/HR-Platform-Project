package iso53.talento.service;

import iso53.talento.model.User;
import iso53.talento.repository.IUserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final IUserRepository iUserRepository;

    @Autowired
    public UserService(IUserRepository iUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    public List<User> findAll() {
        return iUserRepository.findAll();
    }

    public User findById(ObjectId ID) {
        return iUserRepository.findById(ID).orElse(null);
    }

    public User findByEmail(String email) {
        return iUserRepository.findByEmail(email);
    }

    public User save(User user) {
        return iUserRepository.save(user);
    }

    public boolean existByID(ObjectId ID) {
        return iUserRepository.existsById(ID);
    }
}

