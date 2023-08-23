package com.utdwehack.WeSwap.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crew_request")
public class CrewRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reqId;

    private int receiverId;

    private int senderId;

    public int getReqId() {
        return reqId;
    }

    public void setReqId(int reqId) {
        this.reqId = reqId;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    @Override
    public String toString() {
        return "CrewRequest{" +
                "reqId=" + reqId +
                ", receiverId=" + receiverId +
                ", senderId=" + senderId +
                '}';
    }
}
