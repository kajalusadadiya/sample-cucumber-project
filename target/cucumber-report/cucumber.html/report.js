$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7551739200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate ti login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-ti-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 183181100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1390768400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 55579700,
  "error_message": "org.junit.ComparisonFailure: Login page not displayed expected:\u003c...come, Please Sign In[]\u003e but was:\u003c...come, Please Sign In[!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iShouldNavigateToLoginPageSuccessfully(LoginSteps.java:27)\r\n\tat ✽.Then I should navigate to login page successfully(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 957902300,
  "status": "passed"
});
});