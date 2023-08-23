package com.utdwehack.WeSwap.service;

import com.utdwehack.WeSwap.model.User;
import com.utdwehack.WeSwap.model.UserDetails;
import com.utdwehack.WeSwap.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsService {
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public void saveUserDetails(UserDetails userDetails) {
        userDetailsRepository.save(userDetails);
    }

    public UserDetails getUserDetails(Integer id) {
        return userDetailsRepository.findById(id).get();
    }

    public void deleteUserDetails(Integer id) {
        userDetailsRepository.deleteById(id);
    }
}
