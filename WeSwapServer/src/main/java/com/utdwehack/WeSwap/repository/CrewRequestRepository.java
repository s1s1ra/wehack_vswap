package com.utdwehack.WeSwap.repository;

import com.utdwehack.WeSwap.model.CrewRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CrewRequestRepository extends JpaRepository<CrewRequest,Integer> {

    @Query(value = "SELECT * FROM crew_request WHERE receiver_id = ?1", nativeQuery = true)
    List<CrewRequest> listAllRequestsByReceiverId(Integer id);

}
