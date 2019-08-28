Feature: Access Test Page
  I want to be able to interact with the site

  @CreateUser
  Scenario Outline: Create new User
    Given I am on the page "users/new"
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
  | Siclano     | aaa@aa.com           | beltrano |

  @SearchElements
  Scenario: Test radio box
    Given I am on the page "buscaelementos/radioecheckbox"
    When I click in radio box "Red"
    Then The radio box "Red" is checked

  @SearchElements
  Scenario: Test check box
    Given I am on the page "buscaelementos/radioecheckbox"
    When I click in check box "purple"
    Then The check box "purple" is checked
  