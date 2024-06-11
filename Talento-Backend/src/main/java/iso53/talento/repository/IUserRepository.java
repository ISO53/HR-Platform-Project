package iso53.talento.repository;

import iso53.talento.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IUserRepository extends MongoRepository<User, ObjectId> {
    User findByEmail(String email);
}
