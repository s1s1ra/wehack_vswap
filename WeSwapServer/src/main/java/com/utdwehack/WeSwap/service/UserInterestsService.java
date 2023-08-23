package com.utdwehack.WeSwap.service;

import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.model.UserInterests;
import com.utdwehack.WeSwap.repository.UserInterestsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
@Transactional
public class UserInterestsService {

    @Autowired
    UserInterestsRepository userInterestsRepository;

    public void saveUserInterestsList(Integer userId, List<String> interestsList) {
        UserInterests userInterest;
        Iterator<String> it = interestsList.iterator();
        while(it.hasNext()) {
            userInterest = new UserInterests();
            userInterest.setUserId(userId);
            userInterest.setInterest(it.next());
            userInterestsRepository.save(userInterest);
        }
    }

    public List<String> getUserInterests(Integer id) {
        return userInterestsRepository.findByUserId(id);
    }


    public void deleteUserInterestsList(Integer userId, List<String> interests) {

        Iterator<String> it = interests.iterator();
        while(it.hasNext()) {
            userInterestsRepository.deleteUserInterest(userId, it.next());
        }
    }
}
