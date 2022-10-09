import styled from 'styled-components'

export const CategoryContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 20px;
  row-gap: 50px;
    @media (max-width:992px)  {
 .category-container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 20px;
  row-gap: 50px;
  
 }
}
@media (max-width:768px)  {
.category-container {
  display: grid;
  grid-template-columns: repeat(1,1fr);
  
  row-gap: 30px;
  
 }
}
`
export const CategoryTitle = styled.div`
     font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`


