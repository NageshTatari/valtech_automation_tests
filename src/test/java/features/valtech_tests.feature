Feature: Tester should be able to verify all Valtech website pages.

  As a Tester,
  I would like to open valtech websit,
  So that I can verify all valtech pages are build as per requirements.

  Background:
    Given User in Valtech home page


  @Test
  Scenario: Verify Latest News Section is displaying
    Then Latest News Section is displayed

  @Test
  Scenario Outline: check the H1 of each page
    When I am in <pageName>
    Then H1 should be <pageHeader>

    Examples:
      | pageName | pageHeader |
      | ABOUT | About |
      | SERVICES | Services |
      | WORK | Work |

  @Test
  Scenario Outline: count the offices
    When I am in <pageName>
    Then I should see <valtechOffices> count

    Examples:
      | pageName | valtechOffices |
      | CONTACT | 36 |
