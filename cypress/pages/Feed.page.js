class FeedPage {
  elements = {
    textInput: () => cy.get('.PostCreator_input__pWOsE'),
    postBtn: () => cy.get('.PostCreator_card__LCsPE > .BaseButton_button__57lNc'),
    optionsBtn: () => cy.get(':nth-child(3) > .CardAvatar_card__yeSAy > div.CardAvatar_menu__HLrqi > #demo-positioned-button > svg'),
    deleteBtn: () => cy.get('.MuiMenuItem-root'),
    likeBtn: () => cy.get(':nth-child(3) > .PostCard_icon__9Pgu1 > svg')
  };

  typePost(text) {
    this.elements.textInput().click();
    this.elements.textInput().type(text);
  }

  clickLogin() {
    this.interceptCreatePost();
    this.elements.postBtn().click();
  }

  interceptCreatePost(){
    cy.intercept({
      method: 'POST',
      url: 'https://post-api-i.taringa.net/v1/posts/create',
    }).as('apiCreatepost')
  }

  reviewSuccessCreatePost(){
    cy.wait('@apiCreatepost')
  }

  deletePost(){
    this.interceptDeletePost();
    this.elements.optionsBtn().click();
    this.elements.deleteBtn().click();
  }

  interceptDeletePost(){
    cy.intercept({
      method: 'DELETE',
      url: 'https://post-api-i.taringa.net/v1/posts/*',
    }).as('apiDeletePost')
  }

  reviewSuccessDeletePost(){
    cy.wait('@apiDeletePost')
  }

  likePost(){
    this.interceptLike();
    this.elements.likeBtn().click();
  }

  interceptLike(){
    cy.intercept('POST', 'https://post-api-i.taringa.net/v1/posts/*', (req) => {
      req.body = {
        liked: true
      }
    }).as('apiLikePost')
  }

  reviewSuccessLike(){
    cy.wait('@apiLikePost')
  }

  dislikePost(){
    this.interceptDislike();
    this.elements.likeBtn().click();
  }

  interceptDislike(){
    cy.intercept('POST', 'https://post-api-i.taringa.net/v1/posts/*', (req) => {
      req.body = {
        liked: false
      }
    }).as('apiDislikePost')
  }

  reviewSuccessDisike(){
    cy.wait('@apiDislikePost')
  }

}

module.exports = new FeedPage();
