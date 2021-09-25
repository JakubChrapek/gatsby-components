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
          title="Sarah's Palace"
          text="Go to sleep and wake up to the sound of the waves. Exceptional place."
          tags={["dog friendly", "non smoking", "sea view"]}
          img={cardBg}
          imgAlt="Sea landscape from Sarah's Palace apartment"
        />
      </Wrapper>
    </Layout>
  )
}
