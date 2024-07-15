package com.PixelApi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.sql.Timestamp;


@Entity
@Table(name = "clientaccount")
@IdClass(ClientAccountId.class)
public class ClientAccount {

    @Id
    private String token;
    @Id
    private Long clientId;
    private Boolean confirmed;

    public ClientAccount() {
    }

    public ClientAccount(String token, Long clientId, Boolean confirmed) {
        this.token = token;
        this.clientId = clientId;
        this.confirmed = confirmed;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }


    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}