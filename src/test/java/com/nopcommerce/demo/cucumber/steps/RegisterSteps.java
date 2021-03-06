package com.nopcommerce.demo.cucumber.steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class RegisterSteps {
    @When("^I on register link$")
    public void iOnRegisterLink() {
    }

    @And("^I enters following users details$")
    public void iEntersFollowingUsersDetails(DataTable dataTable) {
     List<List<String>> userList = dataTable.asLists(String.class);
        for (List<String> e:userList) {
            System.out.println(e);

        }
    }

    @Then("^registration successful$")
    public void registrationSuccessful() {
    }
}
