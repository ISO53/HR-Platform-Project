package iso53.talento.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "company")
public class Company {

    @Id
    private ObjectId companyID; // Primary Key
    private List<ObjectId> userIDs; // Foreign Keys
    private String companyName;
    private ObjectId image;

    public Company(String companyName, ObjectId image) {
        this.companyID = new ObjectId();
        this.userIDs = new ArrayList<>();
        this.companyName = companyName;
        this.image = image;
    }

    public ObjectId getCompanyID() {
        return companyID;
    }

    public void setCompanyID(ObjectId companyID) {
        this.companyID = companyID;
    }

    public List<ObjectId> getUserIDs() {
        return userIDs;
    }

    public ObjectId getImage() {
        return image;
    }

    public void setUserIDs(List<ObjectId> userIDs) {
        this.userIDs = userIDs;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setImage(ObjectId image) {
        this.image = image;
    }
}
