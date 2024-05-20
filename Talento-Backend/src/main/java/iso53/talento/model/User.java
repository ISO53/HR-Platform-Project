package iso53.talento.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

    @Id
    private ObjectId userId; // Primary Key
    private String userName;
    private String userLastName;
    private String email;
    private String password; // Hashed
    private String address;
    private String phoneNumber;
    private String profilePictureUrl; // Foreign Key
    private String role;

    public User(String userName, String userLastName, String email, String password, String phoneNumber, String role) {
        this.userId = new ObjectId();
        this.userName = userName;
        this.userLastName = userLastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }

    public ObjectId getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public String getRole() {
        return role;
    }

    public void setUserId(ObjectId userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
