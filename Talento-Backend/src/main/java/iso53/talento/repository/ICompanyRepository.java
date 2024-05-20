package iso53.talento.repository;

import iso53.talento.model.Company;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

public interface ICompanyRepository extends MongoRepository<Company, ObjectId> {

}
