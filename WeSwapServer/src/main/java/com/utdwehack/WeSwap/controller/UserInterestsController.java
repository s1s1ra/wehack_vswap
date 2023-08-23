package com.utdwehack.WeSwap.controller;

import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.model.UserInterests;
import com.utdwehack.WeSwap.service.UserInterestsService;
import com.utdwehack.WeSwap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
@RequestMapping("/usersInterests")
public class UserInterestsController {

    @Autowired
    UserInterestsService userInterestsService;

    @Autowired
    UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<List<String>> get(@PathVariable("id") Integer userId) {
        try {
            List<String> userInterests = userInterestsService.getUserInterests(userId);
            return new ResponseEntity<List<String>>(userInterests, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<List<String>>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{id}")
    public void addUserInterestsList(@RequestBody List<String> userInterestsList, @PathVariable("id") Integer userId) {
        userInterestsService.saveUserInterestsList(userId, userInterestsList);
    }

    @DeleteMapping("/{id}")
    public void delete(@RequestBody List<String> userInterestsList, @PathVariable("id") Integer userId) {
        userInterestsService.deleteUserInterestsList(userId, userInterestsList);
    }
}
