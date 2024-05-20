package iso53.talento.controller;

import iso53.talento.model.User;
import iso53.talento.service.UserService;
import iso53.talento.util.Constants;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

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
    public ResponseEntity<?> signIn(@RequestBody SignInRequest request) {
        User user = userService.findByEmail(request.email());

        if (user == null) {
            return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
        }

        if (!user.getPassword().equals(request.password())) {
            return new ResponseEntity<>("Wrong credentials.", HttpStatus.UNAUTHORIZED);
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

        User savedUser = userService.save(new User(
                userDTO.fullName().split(" ", 2)[0],
                userDTO.fullName().split(" ", 2)[1],
                userDTO.email(),
                userDTO.password(), // yes not hashed password, I get it
                null,
                Constants.ROLE_APPLICANT
        ));

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    public record UserDTO(String fullName, String email, String password) {
    }

    public record SignInRequest(String email, String password) {
    }
}
