import { useEffect, useState } from "react";
import CardMapper from "../../components/common/cardMapper";
import Header from "../../components/common/header";
import Hero from "../../components/common/hero";
import { BASE_URL } from "../../utils/params"

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(`${BASE_URL}/users`);
      const response = await request.json();

      setPets(response);
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <CardMapper list={ pets } />
    </>
  );
}
