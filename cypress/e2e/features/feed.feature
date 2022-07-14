Feature: Feed page

    Background:
        Given A user opens the feed page of taringa
    Scenario Outline: Create post
        When A user enters <content>
        And A user clicks on the publish button
        Then The post will be created

        Examples:
        | content |
        | "Mi pimer post" |

    Scenario: Delete post
        When A user deletes the first post in the feed
        Then The post is deleted

    Scenario: Like post
        When A user likes the first post in the feed
        Then The like is applied

    Scenario: Dislike post
        When A user dislikes the first post in the feed
        Then The dislike is applied


    #------------------------------------------------------------
    
    # Scenario: Blocked Login
    #     When A user enters the username "locked_out_user"
    #     And A user enters the password "secret_sauce"
    #     And A user clicks on the login button
    #     Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
    # Scenario: Incorrect Username Login
    #     When A user provides incorrect credentials
    #         | username | password     |
    #         | testName | secret_sauce |
    #     And A user clicks on the login button
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    # Scenario: Incorrect Password Login
    #     When A user provides incorrect credentials
    #         | username      | password     |
    #         | standard_user | testPassword |
    #     And A user clicks on the login button
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    