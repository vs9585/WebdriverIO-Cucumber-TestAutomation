Feature: Submitting a complaint

    As a user on the viewpoint login page
    I want to file a complaint
    Because I am constantly disturbed by the noise created in the apartment next door

    Background:

        Given I am on the viewpoint page

    Scenario Outline: Submitting a complaint against noisy neighbours
        When I fill in the complaint details form with all the values <fname> <lname> <address> <city> <address2> <postcode> <contacts> <details> <likeToContact> <sendReceipt>
        When I submit the complaint
        Then I should see the confirmation of complaint submission

        Examples:
        |fname| |lname| |address| |city| |address2| |postcode| |contacts| |details| |likeToContact| |sendReceipt|
        |"Vikash"| |"Sultania"| |"Unit 4608"| |"Melbourne"| |"568 Collins Street"| |"73301"| |"123456789"| |"Loud Music"| |"Y"| |"form_send_receipt_None"|
