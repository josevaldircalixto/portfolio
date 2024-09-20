import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>José Valdir Filho</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        josevaldirfilho
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
