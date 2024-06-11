package iso53.talento.service;

import iso53.talento.model.Interview;
import iso53.talento.repository.IInterviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewService {

    private final IInterviewRepository iInterviewRepository;

    @Autowired
    public InterviewService(IInterviewRepository iInterviewRepository) {
        this.iInterviewRepository = iInterviewRepository;
    }

    public List<Interview> findAll() {
        return iInterviewRepository.findAll();
    }

    public Interview findById(ObjectId ID) {
        return iInterviewRepository.findById(ID).orElse(null);
    }

    public Interview save(Interview interview) {
        return iInterviewRepository.save(interview);
    }

    public boolean existByID(ObjectId ID) {
        return iInterviewRepository.existsById(ID);
    }
}

