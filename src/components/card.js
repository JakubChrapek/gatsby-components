import React from "react"
import styled from "styled-components"
import { COLORS } from "../constants"
import { Send } from "./icons"

const Wrapper = styled.article`
  max-width: clamp(360px, 25vw, 90vw);
  background-color: ${COLORS.white};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Header = styled.h2`
  margin: 16px 30px 0;
  order: 2;
  > a {
    text-decoration: none;
    color: ${COLORS.primary700};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
  }
`

const Image = styled.img`
  aspect-ratio: 360/264;
  width: 100%;
`

const IconWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  border-radius: 50%;
  background-color: ${COLORS.primary300};
  padding: 20px 21px 17px 16px;
  margin: -32px 24px 0 0;
`

const TextWrapper = styled.div`
  order: 3;
  padding: 0 30px 32px;
  margin: 10px 0 0;
  > p {
    font-size: 14px;
    line-height: 1.5;
    color: ${COLORS.black700};
  }
`

const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 16px 10px;
  grid-auto-flow: column;
  flex-wrap: wrap;
  margin-top: 24px;
`

const Tag = styled.li`
  padding: 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 40px;
  text-align: center;
  background-color: ${COLORS.primary100};
  color: ${COLORS.primary500};
`

const Card = ({ img, imgAlt, tags, text, title }) => {
  return (
    <Wrapper>
      <Header>
        <a href="#">{title}</a>
      </Header>
      <Image src={img} alt={imgAlt} />
      <IconWrapper>
        <Send stroke={COLORS.white} width="27" height="27" />
      </IconWrapper>
      <TextWrapper>
        <p>{text}</p>
        <TagsList>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </TagsList>
      </TextWrapper>
    </Wrapper>
  )
}

export default Card
