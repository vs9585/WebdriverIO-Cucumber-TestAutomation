Feature: Check failed login

    As a user on the viewpoint login page
    I want to login
    But because I enter worong login credentials the login fails

    Background:

        Given I am on the viewpoint login page

    Scenario Outline: Checking failed login
        When I fill in the login details form with <username> <password>
        Then I submit the login form
        Then I should see the login failure error message

        Examples:
        |username| |password|
        |"Darthwader"| |"yoda"|