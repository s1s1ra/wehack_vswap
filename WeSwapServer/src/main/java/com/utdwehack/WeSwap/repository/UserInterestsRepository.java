package com.utdwehack.WeSwap.repository;

import com.utdwehack.WeSwap.model.UserInterests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInterestsRepository extends JpaRepository<UserInterests, Integer> {

    @Query(value = "SELECT interest FROM user_interests WHERE user_id = ?1", nativeQuery = true)
    List<String> findByUserId(Integer userId);

    @Modifying
    @Query(value = "DELETE FROM user_interests WHERE user_id = ?1 and interest = ?2", nativeQuery = true)
    void deleteUserInterest(Integer userId, String interest);


}
