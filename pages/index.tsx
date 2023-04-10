import BodyContainer from '../components/BodyContainer/BodyContainer'
import PostContainer from '../components/Post/PostContainer/PostContainer'
import Navbar from '../components/Navigation/Navbar'

function Home() {

  return (
    <div id="posts">
      <Navbar />
      <BodyContainer>
        <PostContainer>
        </PostContainer>
      </BodyContainer>
    </div>
  )
}

export default Home
