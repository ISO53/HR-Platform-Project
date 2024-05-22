package iso53.talento.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Random;

@Document(collection = "application")
public class Application {

    @Id
    private ObjectId applicationID;
    private ObjectId advertID;
    private ObjectId userID; // might be null
    private String name;
    private String surname;
    private String email;
    private String address;
    private String undergraduateEducation;
    private String mastersDegreeOrDoctorate;
    private String dateOfGraduation;
    private List<String> businessExperience;
    private String githubUrl;
    private double githubScore;
    private List<String> skills;
    private List<String> certificates;
    private List<String> languages;
    private String pathToPDFFile;

    public Application(ObjectId advertID, ObjectId userID, String name, String surname, String email, String address,
                       String undergraduateEducation, String mastersDegreeOrDoctorate, String dateOfGraduation,
                       List<String> businessExperience, String githubUrl, List<String> skills,
                       List<String> certificates, List<String> languages, String pathToPDFFile) {
        this.applicationID = new ObjectId();
        this.advertID = advertID;
        this.userID = userID;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.undergraduateEducation = undergraduateEducation;
        this.mastersDegreeOrDoctorate = mastersDegreeOrDoctorate;
        this.dateOfGraduation = dateOfGraduation;
        this.businessExperience = businessExperience;
        this.githubUrl = githubUrl;
        this.githubScore = calculateGithubScore();
        this.skills = skills;
        this.certificates = certificates;
        this.languages = languages;
        this.pathToPDFFile = pathToPDFFile;
    }

    private double calculateGithubScore() {
        return 1 + (10 - 1) * (new Random()).nextDouble();
    }

    public ObjectId getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(ObjectId applicationID) {
        this.applicationID = applicationID;
    }

    public ObjectId getAdvertID() {
        return advertID;
    }

    public void setAdvertID(ObjectId advertID) {
        this.advertID = advertID;
    }

    public ObjectId getUserID() {
        return userID;
    }

    public void setUserID(ObjectId userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUndergraduateEducation() {
        return undergraduateEducation;
    }

    public void setUndergraduateEducation(String undergraduateEducation) {
        this.undergraduateEducation = undergraduateEducation;
    }

    public String getMastersDegreeOrDoctorate() {
        return mastersDegreeOrDoctorate;
    }

    public void setMastersDegreeOrDoctorate(String mastersDegreeOrDoctorate) {
        this.mastersDegreeOrDoctorate = mastersDegreeOrDoctorate;
    }

    public String getDateOfGraduation() {
        return dateOfGraduation;
    }

    public void setDateOfGraduation(String dateOfGraduation) {
        this.dateOfGraduation = dateOfGraduation;
    }

    public List<String> getBusinessExperience() {
        return businessExperience;
    }

    public void setBusinessExperience(List<String> businessExperience) {
        this.businessExperience = businessExperience;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public double getGithubScore() {
        return githubScore;
    }

    public void setGithubScore(double githubScore) {
        this.githubScore = githubScore;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<String> getCertificates() {
        return certificates;
    }

    public void setCertificates(List<String> certificates) {
        this.certificates = certificates;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public String getPathToPDFFile() {
        return pathToPDFFile;
    }

    public void setPathToPDFFile(String pathToPDFFile) {
        this.pathToPDFFile = pathToPDFFile;
    }
}
