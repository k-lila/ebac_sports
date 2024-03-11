import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const _favorito = action.payload
      if (state.favoritos.find((f) => f.id === _favorito.id)) {
        state.favoritos = state.favoritos.filter(
          (fav) => fav.id !== _favorito.id
        )
      } else {
        state.favoritos.push(_favorito)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
