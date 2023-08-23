package com.utdwehack.WeSwap.service;

import com.utdwehack.WeSwap.model.CrewRequest;
import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.repository.CrewRequestRepository;
import com.utdwehack.WeSwap.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@Transactional
public class CrewRequestService {

    @Autowired
    CrewRequestRepository crewRequestRepository;

    @Autowired
    UserRepository userRepository;

    public List<User> listAllRequestsByReceiverId(Integer id) {
        List<CrewRequest> crewRequests =  crewRequestRepository.listAllRequestsByReceiverId(id);
        List<User> requestorsList = new ArrayList<>();
        for(CrewRequest crewRequestTemp : crewRequests) {
            requestorsList.add(userRepository.findById(crewRequestTemp.getSenderId()).get());
        }
        return requestorsList;
    }

//    public List<CrewRequest> listAllRequestsByReceiverId(Integer id) {
//        return crewRequestRepository.listAllRequestsByReceiverId(id);
//    }

    public void saveRequest(CrewRequest crewRequest) {
        crewRequestRepository.save(crewRequest);
    }

}
