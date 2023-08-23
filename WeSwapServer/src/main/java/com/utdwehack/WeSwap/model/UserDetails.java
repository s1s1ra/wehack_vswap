package com.utdwehack.WeSwap.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "user_details")
public class UserDetails {

    @Id
    private int userId;

    private int age;

    private String gender;

    private String sexuality;

    private String pronouns;

    private String ethnicity;

    private String faith;

    private String education;

    private String profession;

    private String diffAbility;

    @Override
    public String toString() {
        return "UserDetails{" +
                "userId=" + userId +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", sexuality='" + sexuality + '\'' +
                ", pronouns='" + pronouns + '\'' +
                ", ethnicity='" + ethnicity + '\'' +
                ", faith='" + faith + '\'' +
                ", education='" + education + '\'' +
                ", profession='" + profession + '\'' +
                ", diffAbility='" + diffAbility + '\'' +
                '}';
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSexuality() {
        return sexuality;
    }

    public void setSexuality(String sexuality) {
        this.sexuality = sexuality;
    }

    public String getPronouns() {
        return pronouns;
    }

    public void setPronouns(String pronouns) {
        this.pronouns = pronouns;
    }

    public String getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }

    public String getFaith() {
        return faith;
    }

    public void setFaith(String faith) {
        this.faith = faith;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getDiffAbility() {
        return diffAbility;
    }

    public void setDiffAbility(String diffAbility) {
        this.diffAbility = diffAbility;
    }
}
