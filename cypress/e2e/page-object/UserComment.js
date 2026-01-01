class CommentPost {

    selectorsList() {
     const selectors = {

        FeatureComment: "[data-qa='comment-input']",
        FirstButton: "[data-qa='publish-button']",
        SecondtButton: "[data-qa='publish-button']",
        ContainsOneMessage: "[data-qa='comment-info-box']",
        DeleteComment: "[data-qa='delete-button']",
        ContainsMessage: "[data-qa='comment-info-box']"
            
        }
        
            return selectors

        }
      
        infoComment(FirstComment, SecondComment) {

        cy.get(this.selectorsList().FeatureComment).first().type(FirstComment)
        cy.get(this.selectorsList().FirstButton).first().click()
        cy.get(this.selectorsList().ContainsOneMessage).contains('teste')
        cy.get(this.selectorsList().DeleteComment).eq(1).click()
        cy.get(this.selectorsList().FeatureComment).eq(1).click().type(SecondComment)
        cy.get(this.selectorsList().FirstButton).eq(1).click()
        cy.get(this.selectorsList().ContainsMessage).contains('teste2')
        cy.get(this.selectorsList().DeleteComment).eq(2).click()    
                
        }

    }

    export default CommentPost