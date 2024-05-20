package iso53.talento.repository;

import iso53.talento.model.Advert;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface IAdvertRepository extends MongoRepository<Advert, ObjectId> {

}