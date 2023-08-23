package com.utdwehack.WeSwap.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crew")
public class Crew {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int crewId;

    public int getCrewId() {
        return crewId;
    }

    public void setCrewId(int crewId) {
        this.crewId = crewId;
    }

    @Override
    public String toString() {
        return "Crew{" +
                "crewId=" + crewId +
                '}';
    }
}
