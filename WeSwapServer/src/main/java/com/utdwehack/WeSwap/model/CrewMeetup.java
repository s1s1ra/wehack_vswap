package com.utdwehack.WeSwap.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crew_meetup")
public class CrewMeetup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rowId;

    private int crewId;

    private String dDate;

    private String meetupDesc;

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

    public String getdDate() {
        return dDate;
    }

    public void setdDate(String dDate) {
        this.dDate = dDate;
    }

    public String getMeetupDesc() {
        return meetupDesc;
    }

    public void setMeetupDesc(String meetupDesc) {
        this.meetupDesc = meetupDesc;
    }

    @Override
    public String toString() {
        return "CrewMeetup{" +
                "rowId=" + rowId +
                ", crewId=" + crewId +
                ", dDate='" + dDate + '\'' +
                ", meetupDesc='" + meetupDesc + '\'' +
                '}';
    }
}
