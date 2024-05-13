package iso53.talento.repository;

import iso53.talento.model.Application;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface IApplicationRepository extends MongoRepository<Application, ObjectId> {

}
