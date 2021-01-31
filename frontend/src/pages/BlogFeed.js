import React from 'react'
import styled from 'styled-components'

export const BlogFeed = () => {
  const blogpostarr = [
    {
      title: 'Hello test',
      blogtext:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Hello again',
      blogtext:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Third time hello',
      blogtext:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Title to short',
      blogtext: 'This is a short one',
    },
    {
      title: 'Headlines headlines',
      blogtext: 'textelitext to the text to the texty',
    },
    {
      title: 'Little Wing',
      blogtext:
        'Well shes walking, through the clouds, With a circus mind thats running round, Butterflies and zebras, And moonbeams And-a, fairytales, Thats all she ever thinks about Riding with the wind',
    },
    {
      title: 'If',
      blogtext:
        'If you can dream - and not make dreams your master If you can think - and not make thoughts your aim, If you can meet with Triumph and Disaster And treat those two impostors just the same If you can bear to hear the truth youve spoken, Twisted by knaves to make a trap for fools, Or watch the things you gave your life to, broken, And stoop and build em up with worn-out tools',
    },
    {
      title: 'Best food ever',
      blogtext: 'Pizza. Pasta. Anything with butter and salt.'
    },
    {
      title: 'Can you eat bugs?',
      blogtext:
        'Yes. My friend ate a deepfried spider in madagaskar and said it tasted like paté. I wouldnt like to try it though..'
    },
    {
      title: 'Last title for dummies',
      blogtext: 'Last dummytext for testing out my layout.'
    },
  ]

  const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  background: #fff;
  margin: 5px;
  `
  const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content;
  justify-items: center;
  width: 100%;
  margin: 3em 2em 1em 2em;
  `

  return (
    <FeedGrid>
      {blogpostarr.map((blogpost) => {
        return(
        <Card>
          <h3>{blogpost.title}</h3>
          <p>{blogpost.blogtext}</p>
        </Card>
      )})}
    </FeedGrid>
  )
}
