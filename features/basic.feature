Feature: Access Test Page
  I want to be able to interact with the site

  Scenario Outline: Create new User
    Given I am on the Page
    When I open the form
    And I fill out Name "<name>"
    And I fill out Email "<email>"
    And I fill out Last Name "<lastname>"
    And I click on save button
    Then I see the message

  Examples:
  | name        | email                | lastname |
  | Alexandre   | alexandre@email.com  | Lunkes   |
  | Alexandre2  | alexandre2@email.com | Lunkes   |
  | Siclano     | aaa@aa               | beltrano |