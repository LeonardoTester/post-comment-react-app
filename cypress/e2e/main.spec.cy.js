import CommentPost from "./page-object/UserComment"
import BoxProfile from "./page-object/ProfileBox"

const commentPost = new CommentPost()
const boxUser = new BoxProfile()

describe('Post comment - Test', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')

    commentPost.infoComment('teste', 'teste2')
    boxUser.infoProfile()
    
      })
   })