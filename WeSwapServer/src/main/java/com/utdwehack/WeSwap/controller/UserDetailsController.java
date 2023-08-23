package com.utdwehack.WeSwap.controller;

import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.model.UserDetails;
import com.utdwehack.WeSwap.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/userDetails")
public class UserDetailsController {

    @Autowired
    UserDetailsService userDetailsService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDetails> get(@PathVariable Integer id) {
        try {
            UserDetails userDetails = userDetailsService.getUserDetails(id);
            return new ResponseEntity<UserDetails>(userDetails, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<UserDetails>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public void add(@RequestBody UserDetails userDetails) {
        userDetailsService.saveUserDetails(userDetails);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody UserDetails userDetails, @PathVariable Integer id) {
        try {
            //UserDetails existUserDetails = userDetailsService.getUserDetails(id);
            userDetails.setUserId(id);
            userDetailsService.saveUserDetails(userDetails);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        userDetailsService.deleteUserDetails(id);
    }

}
