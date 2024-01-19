package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	private final UserService userService;
	
	@Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
	
//    @GetMapping("/")
//    public List<User> findAll(@RequestParam(required = false) String dept,
//                              @RequestParam(required = false) Double minSalary) {
//        System.out.println("Find All " + dept);
//
//        if (dept == null) {
//            return service.findAll();
//        } else {
//            if (minSalary == null) {
//                return service.findByDepartment(dept);
//            } else {
//                return service.findByDepartmentAndMinSalary(dept, minSalary);
//            }
//
//        }
//        

        @GetMapping
        public List<User> findAllUsers() {
            return userService.findAllUsers();
        }


        @GetMapping("/{id}")
        public User findOneUser (@PathVariable Long id){
            User e = userService.findOneUser(id);
            return userService.findOneUser(id);
        }

        @PostMapping("/")
        public User addUser (@RequestBody User user){
            System.out.println(user);
            return userService.addUser(user);
        }

        //	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
        @PutMapping("/{id}")
        public User updateUser (@RequestBody User user, @PathVariable Long id){
            System.out.println(user);
            return userService.updateUser(user);
        }
}

//        @GetMapping("/search")
//        public ResponseEntity<Object> search (@RequestParam(required = false) String dept){
//            ArrayList<Object> list = new ArrayList<>();
//
//            List<User> le = userService.findAll();
//
//            for (User user : le) {
//
//                list.add(user.toMap());
//            }
//
//            return new ResponseEntity<Object>(list, HttpStatus.OK);
//        }
//
//    }


