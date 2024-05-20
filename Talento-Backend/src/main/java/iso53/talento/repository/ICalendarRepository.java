package iso53.talento.repository;

import iso53.talento.model.Calendar;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ICalendarRepository extends MongoRepository<Calendar, ObjectId> {
}
