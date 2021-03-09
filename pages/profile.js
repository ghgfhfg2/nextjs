import Layout from "./layout";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  return (
    <Layout>
      <p>{router.query.name} profile</p>
    </Layout>
  );
}
