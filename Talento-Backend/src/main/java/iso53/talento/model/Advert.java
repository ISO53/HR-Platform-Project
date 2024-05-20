package iso53.talento.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "advert")
public class Advert {

    @Id
    private ObjectId advertId; // Primary Key
    private ObjectId companyId; // Foreign Key
    private String position;
    private String header;
    private String information;
    private Date uploadDate;

    public Advert(ObjectId companyId, String position, String header, String information) {
        this.advertId = new ObjectId();
        this.companyId = companyId;
        this.position = position;
        this.header = header;
        this.information = information;
        this.uploadDate = new Date();
    }

    public ObjectId getAdvertId() {
        return advertId;
    }

    public void setAdvertId(ObjectId advertId) {
        this.advertId = advertId;
    }

    public ObjectId getCompanyId() {
        return companyId;
    }

    public void setCompanyId(ObjectId companyId) {
        this.companyId = companyId;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }
}

