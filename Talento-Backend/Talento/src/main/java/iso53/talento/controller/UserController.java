package iso53.talento.controller;

import iso53.talento.model.Image;
import iso53.talento.model.User;
import iso53.talento.service.ImageService;
import iso53.talento.service.UserService;
import iso53.talento.util.Constants;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private ImageService imageService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        User user = userService.findById(new ObjectId(id));

        return user == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<>(user, HttpStatus.FOUND);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<User> signIn(@RequestParam String email, @RequestParam String password) {
        User user = userService.findByEmail(email);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (!user.getPassword().equals(passwordEncoder.encode(password))) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        // TODO what to do next here?
        return new ResponseEntity<>(userService.save(user), HttpStatus.OK);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<User> signUp(@RequestBody UserDTO userDTO) {
        User user = userService.findByEmail(userDTO.email());

        if (user != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        String fileName;
        try {
            fileName = imageService.save(ImageService.IMAGE_DIRECTORY, userDTO.image());
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Image _image = new Image(fileName);

        Image createdImage = imageService.save(_image);

        User savedUser = userService.save(new User(
                createdImage.getImageId(),
                userDTO.userName(),
                userDTO.userLastName(),
                userDTO.email(),
                passwordEncoder.encode(userDTO.password()),
                userDTO.phoneNumber(),
                Constants.ROLE_APPLICANT
        ));

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    public record UserDTO(MultipartFile image, String userName, String userLastName, String email, String password,
                          ObjectId address,
                          String phoneNumber) {
    }
}
