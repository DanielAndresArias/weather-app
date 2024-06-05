import styles from '@/components/layout/Layout.module.scss'
import Search from '@/components/search/Search'
import CardWeatherToday from '@/components/card-weather-today/CardWeatherToday'
import ExtraInfoToday from '@/components/extra-info-today/ExtraInfoToday'
import Place from '@/components/place/Place'
import WeatherInfoHeader from '@/components/weather-info-header/WeatherInfoHeader'

const Layout = () => {
  return (
    <main className={styles['main']}>
        <section className={styles['today']}>
          <Search />
          <CardWeatherToday />
          <ExtraInfoToday />
          <Place />
        </section>
        <section className={styles['weather-info']}>
          <WeatherInfoHeader />
          <section></section>
          <section></section>
        </section>
    </main>
  )
}

export default Layout
