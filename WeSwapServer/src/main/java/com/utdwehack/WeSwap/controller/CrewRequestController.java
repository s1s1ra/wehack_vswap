package com.utdwehack.WeSwap.controller;

import com.utdwehack.WeSwap.model.CrewRequest;
import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.model.UserInterests;
import com.utdwehack.WeSwap.service.CrewRequestService;
import com.utdwehack.WeSwap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/requests")
public class CrewRequestController {

    @Autowired
    CrewRequestService crewRequestService;


    @GetMapping("/{id}")
    public ResponseEntity<List<User>> get(@PathVariable Integer id) {
        try {
            List<User> crewRequests = crewRequestService.listAllRequestsByReceiverId(id);
            return new ResponseEntity<List<User>>(crewRequests, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<List<User>>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<List<CrewRequest>> get(@PathVariable Integer id) {
//        try {
//            List<CrewRequest> crewRequests = crewRequestService.listAllRequestsByReceiverId(id);
//            return new ResponseEntity<List<CrewRequest>>(crewRequests, HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<List<CrewRequest>>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/")
    public void add(@RequestBody CrewRequest crewRequest) {
        System.out.println(crewRequest);
        System.out.println(crewRequest.getReceiverId());
        crewRequestService.saveRequest(crewRequest);
    }

}
