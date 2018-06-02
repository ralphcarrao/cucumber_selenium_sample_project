Feature: Sample test for Quad X website
  Scenario:
    Given I visit the quad x website
    When I click "Careers" button
    And I click "QA Analyst" button
    And I click "Apply" button
    Then I should be redirected to the application form
