import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"


const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost postImg="./post1.png" postTitle={"lets date baby"} likes={69} replies={99} />
      <UserPost postImg="./post2.png" postTitle={"lets do it"} likes={869} replies={989} />
      <UserPost postImg="./post3.png" postTitle={"hate u"} likes={669} replies={939} />
      <UserPost  postTitle={"lets talk baby"} likes={619} replies={929} />
      
    </>
  )
}

export default UserPage
