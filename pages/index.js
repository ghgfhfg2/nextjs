import Layout from "./layout";
import Link from "next/link";
import axios from "axios";


const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>{props.profile}'s profile</a>
    </Link>
  </div>
)
const Index = (props ) => (
  <Layout>
    <p>index</p>
    {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))}
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = res.data

  return {
    profiles : data.map(profile => profile.name)
  }
}

export default Index;