package iso53.talento.repository;

import iso53.talento.model.Company;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ICompanyRepository extends MongoRepository<Company, ObjectId> {

}
