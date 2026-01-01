class BoxProfile {

    selectorsList() {
     const selectors = {

        ProfileUser: "[data-qa='profile-box']",
            
        }
        
            return selectors

        }
      
        infoProfile() {

        cy.get(this.selectorsList().ProfileUser)
      
                
        }

    }

    export default BoxProfile