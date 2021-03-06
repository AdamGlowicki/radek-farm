import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding-left: 80px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div.attrs({
    className: 'mt-5 mb-4'
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  h3 {
    font-size: 40px;
  }
  
  p {
    font-size: 20px;
    width: 400px
  }
`

const FormWrapper = styled.div`
  label {
    font-weight: 700;
  }
  
  input {
    border: 2px solid black;
    width: 300px;
    margin-bottom: 12px;
  }
  
  textarea {
    border: 2px solid black;
    width: 600px;
    height: 200px;
    resize: none;
  }
  
  button {
    margin-top: 60px;
  }
`

const Contact = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Wrapper>
            <Title>
                <h3>jakis Tytuł</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, iusto mollitia omnis
                </p>
            </Title>

            <FormWrapper>
                <form
                    action='/form'
                    autoComplete='off'
                    className='d-flex flex-column align-items-start'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='d-flex flex-column align-items-start' >
                        <label >name</label>
                        <input
                            ref={register}
                            type="text"
                            name='name'
                        />
                    </div>

                    <div className='d-flex flex-column align-items-start' >
                        <label >E-mail</label>
                        <input
                            ref={register}
                            type="email"
                            name='email'
                        />
                    </div>

                    <div className='d-flex flex-column align-items-start' >
                        <label >message</label>
                        <textarea
                            ref={register}
                            name='message'
                        />
                    </div>

                    <Button>send</Button>
                </form>
            </FormWrapper>

        </Wrapper>
);
};

export default Contact;