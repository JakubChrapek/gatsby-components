import React from "react"
import Card from "../components/card"
import Layout from "../components/layout"
import { Wrapper } from "../components/wrapper"
import cardBg from "../img/sea-landscape-bg.jpg"

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Card
          title="Hotel 123"
          text="Sem nunc non turpis nunc convallis turpis malesuada iaculis lacinia."
          tags={["dog friendly", "non smoking", "sea view"]}
          img={cardBg}
          imgAlt="Sea landscape"
        />
      </Wrapper>
    </Layout>
  )
}
