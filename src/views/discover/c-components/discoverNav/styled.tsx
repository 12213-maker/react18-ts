import styled from 'styled-components'
const DiscoverNavStyled = styled.div`
  height: 30px;
  background-color: ${props=>props.theme.color.primary};
  
  .navcontainer{
    position: relative;
    top: 2px;
    .navitem{
    position: relative;
    left: 390px;
    color: ${props=>props.theme.color.fontColor};
    font-size: 12px;
    margin: 0 17px;
    padding:0 13px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
  }
  .navitem:hover,
  .active{
    background-color: ${props=>props.theme.color.secondary};
    border-radius: 15px;
  }
  }
  
`

export default DiscoverNavStyled