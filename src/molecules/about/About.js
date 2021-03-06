import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  width: calc(40% + 65px);
  height: calc(100vh - 85px);
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  img {
    position:absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    object-fit: cover;
  }
`;

const Content = styled.aside`
  margin: 40px 0 0 -65px;
  width: 100%;
`

const Title = styled.div`
  display: flex;
  padding: 30px 65px;
  line-height: 1;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 4px solid black;
 
  h3 {
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
  }
  
  p {
    font-size: 20px;
    width: 50%;
  }
`

const Paragraph = styled(Title)`
  h3 {
  font-size: 30px;
  margin-top: 10px;
  }
  
  p {
    width: 80%;
  }
`

const About = () => {
    return (
        <Wrapper>
            <img src="https://pixabay.com/get/g47da8b73cc2ef4c3fc112a5d8b3b4ff15f5544dd9dba29cc51b8f8b47ff6878da2249176571b9eaaf36992f9e0f1d44e_1920.jpg" alt=""/>

            <Content>
                <Title
                    area='one'
                >
                    <h3>Jakis tytuł</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </Title>
                <Paragraph
                    area='two'
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, iusto mollitia omnis
                        perferendis possimus ullam? Cumque deleniti, doloribus, earum eius est hic minima numquam
                        placeatempora, tempore vero voluptate voluptates!
                        placeatempora, tempore vero voluptate voluptates!
                        placeatempora, tempore vero voluptate voluptates!
                    </p>
                    <h3>Jakis Napis</h3>
                </Paragraph>
            </Content>
        </Wrapper>
    );
};

export default About;