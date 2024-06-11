package iso53.talento.repository;

import iso53.talento.model.Advert;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IAdvertRepository extends MongoRepository<Advert, ObjectId> {

}