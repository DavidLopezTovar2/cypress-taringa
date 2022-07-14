import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const feedPage = require("../../pages/Feed.page");


Given('A user opens the feed page of taringa', () => {
  cy.visit('/feeds');
});

// Scenario Outline: Create post
When('A user enters {string}', (text) =>{
  feedPage.typePost(text);
});
And('A user clicks on the publish button', () => {
  feedPage.clickLogin();
})
Then('The post will be created', () => {
  feedPage.reviewSuccessCreatePost();
});

// Scenario: Delete post
When('A user deletes the first post in the feed', () => {
  feedPage.deletePost();
});
Then('The post is deleted', () => {
  feedPage.reviewSuccessDeletePost()
});

When('A user likes the first post in the feed', () => {
  feedPage.likePost();
});
Then('The like is applied', () => {
  feedPage.reviewSuccessLike();
});

When('A user dislikes the first post in the feed', () => {
  feedPage.dislikePost();
});
Then('The dislike is applied', () => {
  feedPage.reviewSuccessDisike();
});


// EXAMPLE TO FOLLOW

// Given("A user opens a saucelabs website", () => {
//   cy.visit("/");
// });
// When("A user enters the username {string}", (username) => {
//   loginPage.typeUsername(username);
// });
// When("A user provides incorrect credentials", (table) => {
//   table.hashes().forEach((row) => {
//     cy.log(row.username);
//     cy.log(row.password);
//     loginPage.typeUsername(row.username);
//     loginPage.typePassword(row.password);
//   });
// });
// And("A user enters the password {string}", (password) => {
//   loginPage.typePassword(password);
// });
// And("A user clicks on the login button", () => {
//   loginPage.clickLogin();
// });
// Then("the url will contains the inventory subdirectory", () => {
//   cy.url().should("contains", "/inventory.html");
// });
// Then("The error message {string} is displayed", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
// });
