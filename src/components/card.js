import React from "react"
import styled from "styled-components"
import { Send } from "./icons"

const Wrapper = styled.article``

const Tag = styled.li``

const Card = ({ img, imgAlt, tags, text, title }) => {
  return (
    <Wrapper>
      <h2>
        <a href="#">{title}</a>
      </h2>
      <img src={img} alt={imgAlt} />
      <Send width="56" height="56" />
      <p>{text}</p>
      <ul>
        {tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Card
