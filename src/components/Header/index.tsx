import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { AppTitle, Container, SelectVsCurrency, VsCurrencyLabel, VsCurrencyOption } from './styles'

const Header = () => {
  const {vsCurrency, setVsCurrency} = useContext(UserContext)

  return (
    <Container>
      <AppTitle data-cy='titulo-header'>Crypto Search</AppTitle>
      <VsCurrencyLabel>Moeda alvo:</VsCurrencyLabel>
      <SelectVsCurrency data-cy="tipo-moeda"
        value={vsCurrency}
        onChange={(e) => setVsCurrency(e.target.value)}>
          <VsCurrencyOption value='brl'>Real</VsCurrencyOption>
          <VsCurrencyOption value='usd'>Dólar Americano</VsCurrencyOption>
          <VsCurrencyOption value='eur'>Euro</VsCurrencyOption>
          <VsCurrencyOption value='jpy'>Iene</VsCurrencyOption>
          <VsCurrencyOption value='cny'>Renminbi</VsCurrencyOption>
      </SelectVsCurrency>
    </Container>
  )
}

export default Header
