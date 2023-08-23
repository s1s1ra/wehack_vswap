package com.utdwehack.WeSwap.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crew_members")
public class CrewMembers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rowId;

    private int crewId;

    private int memberId;

    public int getRowId() {
        return rowId;
    }

    public void setRowId(int rowId) {
        this.rowId = rowId;
    }

    public int getCrewId() {
        return crewId;
    }

    public void setCrewId(int crewId) {
        this.crewId = crewId;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    @Override
    public String toString() {
        return "CrewMembers{" +
                "rowId=" + rowId +
                ", crewId=" + crewId +
                ", memberId=" + memberId +
                '}';
    }
}
