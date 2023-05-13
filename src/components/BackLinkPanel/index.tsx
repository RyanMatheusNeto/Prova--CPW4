import { BackButton, BackLink, BackLinkPanel } from './styles'

const BackLinkPanel2 = ()=> {
    return(
    <BackLinkPanel>
        <BackLink to='/'>
          <BackButton data-cy="botao-voltar">Voltar</BackButton>
        </BackLink>
      </BackLinkPanel>
    )
}

export default BackLinkPanel2


