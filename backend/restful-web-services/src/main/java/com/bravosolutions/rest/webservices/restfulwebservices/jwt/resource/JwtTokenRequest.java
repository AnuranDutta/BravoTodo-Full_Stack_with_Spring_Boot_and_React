package com.bravosolutions.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;			

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNjk4MTc2MiwiaWF0IjoxNjI2Mzc2OTYyfQ.gvvZsDgE8Ebzdcrds35xASxDZ9SRnDTX8eloIwPQrvZt0GDp0yhKpCacjJHtmhGzaWCePRvNmrRLb5HIZbLE3w"
//    }

    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

