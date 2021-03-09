import Layout from "../layout";
import { useRouter } from "next/router";
import axios from "axios";

export default function Profile(props) {
  const router = useRouter();

  return (
    <Layout>
      <p>{router.query.profile} profile</p>
      {props.profiles.map(data => (
        <>
        <div>{data.username}</div>
        <div>{data.email}</div>
        </>
      ))}
    </Layout>
  );
}
Profile.getInitialProps = async (ctx) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users?name=${ctx.query.profile}`);
  const data = res.data

  return {
    profiles : data
  }
}