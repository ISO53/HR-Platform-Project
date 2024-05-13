package iso53.talento.service;

import iso53.talento.model.Calendar;
import iso53.talento.repository.ICalendarRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CalendarService {

    private final ICalendarRepository iCalendarRepository;

    @Autowired
    public CalendarService(ICalendarRepository iCalendarRepository) {
        this.iCalendarRepository = iCalendarRepository;
    }

    public List<Calendar> findAll() {
        return iCalendarRepository.findAll();
    }

    public Calendar findById(ObjectId ID) {
        return iCalendarRepository.findById(ID).orElse(null);
    }

    public Calendar save(Calendar calendar) {
        return iCalendarRepository.save(calendar);
    }

    public boolean existByID(ObjectId ID) {
        return iCalendarRepository.existsById(ID);
    }
}

