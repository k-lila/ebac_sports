import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.favoritos
  )
  const estaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav) => fav.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={estaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
