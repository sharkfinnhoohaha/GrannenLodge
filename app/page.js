import client from "../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function Home() {
  // This fetches the data from the home.json file we created
  const res = await client.queries.page({ relativePath: "home.json" });
  
  // Pass the data into our interactive Client Component
  return <ClientPage {...res} />;
}