package iso53.talento.repository;

import iso53.talento.model.Application;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IApplicationRepository extends MongoRepository<Application, ObjectId> {

}
