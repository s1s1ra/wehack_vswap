package com.utdwehack.WeSwap.repository;

import com.utdwehack.WeSwap.model.Crew;
import com.utdwehack.WeSwap.model.CrewRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrewRepository extends JpaRepository<Crew,Integer> {
}
