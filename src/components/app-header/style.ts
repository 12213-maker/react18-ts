import styled from 'styled-components'
const HeaderStyle = styled.div`
  background-color: ${props => props.theme.color.darkest};
  height: 75px;
  font-size: 14px;
  color: ${props => props.theme.color.fontColor} ;
  .content{
    ${props => props.theme.mixin.wrapv1}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: ${props => props.theme.color.primary};
  }
`

export const HeaderLeft = styled.div`
position:relative;
  left: -9px;
    display: flex;
    .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list{
    display: flex;
    line-height: 70px;
    .item{
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color:  ${props => props.theme.color.fontColor};
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 11px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          border-radius:35px;
          overflow: hidden;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      .active {
        color: ${props => props.theme.color.activeFontColor};
        background: ${props => props.theme.color.darkestSecondary};
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  position:relative;
  left: -36px;
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  .input{
    .HeaderInput{
    border-radius: 16px;
    height: 32px;
    width: 158px;
    font-size: 12px;
  }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    text-align: center;
    border: 1px solid ${props => props.theme.color.fontColor};
    border-radius: 16px;
    color: ${props => props.theme.color.fontColor};
    cursor: pointer;

    :hover {
      color: #fff;
      border-color: #fff;
    }
  }
  .login{
    color: ${props => props.theme.color.fontColor};
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .rightselector{
    position: absolute;
    right: -200px;
  }
  
`

export default HeaderStyle;