Feature: Tests for the TODO application API 
         User send API request and verfify the responses
 
    Scenario: Successfull retrivel of the existing TODO items by sending API request 

    When user send a GET reques to the API endpoint todos
    Then user can see the success response from the API as 200 

    Scenario: Successfull retrivel of the existing TODO item by sending API request 

    When user send a GET request to the API endpoint id as "1"
    Then user can see the success response from the API as 200 

    
