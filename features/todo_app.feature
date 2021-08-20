@regression
Feature: Todo Application testing
         Testing the feature of the application 

    
    Scenario: Todo Application home page

    When user enter the url
    Then user check for the tilte of the home page
    

    Scenario: Todo Application heading

    Given user browse Todo Application
    Then user can see the heading of the application
    

    Scenario: Verification of presence of the newly created todo item in All list 

    Given user browse Todo Application 
    When user enter what needs to be done in to the TODO list as "Todo item 1"
    And user click on All button
    Then user checks the TODO list for "Todo item 1" 

    
    Scenario: Verification of presence of the newly created todo item in Active list 

    Given user browse Todo Application 
    When user enter what needs to be done in to the TODO list as "Todo item 2"
    And user click on Active button
    Then user checks the TODO list for "Todo item 2" 


    Scenario: Verification of absence of the newly created todo item in Completed list 

    Given user browse Todo Application 
    When user enter what needs to be done in to the TODO list as "Todo item 3"
    And user click on Completed button
    Then user checks the completed TODO list for "Todo item 3" 


    Scenario: Count remaining todo items in TODO list 

    Given user browse Todo Application
    And user on Active TODO list
    And user counts initial todo items in TODO list
    When user enter what needs to be done in to the TODO list as "Todo item 4" 
    Then user get one more item in the TODO list 





    

    
    
    



    






