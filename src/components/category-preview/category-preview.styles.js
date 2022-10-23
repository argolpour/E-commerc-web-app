import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`
export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;   
`

export const Preview = styled.div`
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
       @media (max-width:992px)  {
   grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
       }
         @media (max-width:576px)  {
   grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
       }
  `
