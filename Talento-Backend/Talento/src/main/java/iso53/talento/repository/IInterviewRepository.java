package iso53.talento.repository;

import iso53.talento.model.Interview;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IInterviewRepository extends MongoRepository<Interview, ObjectId> {
}
