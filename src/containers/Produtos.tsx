import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

import { useGetProdutosQuery } from '../services/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.favoritos
  )
  const estaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav) => fav.id === produto.id)
  }

  if (isLoading) {
    return <h2>Carregando...</h2>
  } else {
    return (
      <>
        <S.Produtos>
          {produtos?.map((produto) => (
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
}

export default ProdutosComponent
