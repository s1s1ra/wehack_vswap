package com.utdwehack.WeSwap.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_interests")
public class UserInterests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rowId;
    private int userId;
    private String interest;

    public int getRowId() {
        return rowId;
    }

    public void setRowId(int rowId) {
        this.rowId = rowId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }

    @Override
    public String toString() {
        return "UserInterests{" +
                "rowId=" + rowId +
                ", userId=" + userId +
                ", interest='" + interest + '\'' +
                '}';
    }
}
