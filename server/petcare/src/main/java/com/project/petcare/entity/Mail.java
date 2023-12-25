package com.project.petcare.entity;
//THIS IS NOT AN ENTITY :D hihi
public class Mail {
    private String fromMail;
    private String toMail;
    private String subject;
    private String body;

    public Mail(String fromMail, String toMail, String subject, String body) {
        this.fromMail = fromMail;
        this.toMail = toMail;
        this.subject = subject;
        this.body = body;
    }


    public String getFromMail() {
        return fromMail;
    }
    public void setFromMail(String fromMail) {
        this.fromMail = fromMail;
    }
    public String getToMail() {
        return toMail;
    }
    public void setToMail(String toMail) {
        this.toMail = toMail;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getBody() {
        return body;
    }
    public void setBody(String body) {
        this.body = body;
    }
    
    
}
