import { Header } from '@/common/components/header'
import { Footer } from '@/common/components/footer/Footer.tsx'
import { FavoritesPage } from '@/features/movies/ui/favoritesPage'
import { SearchPage } from '@/features/movies/ui/searchPage'


export const App = () => {
  return (
    <>
      <Header />
      {/*<MainPage />*/}
      {/*<CategoryPage/>*/}
      {/*<FilteredMoviesPage/>*/}
      {/*<SearchPage />*/}
      <FavoritesPage />
      <Footer />
    </>
  )
}

