import styles from '@/components/cards-weather-period/CardsWeatherPeriod.module.scss'
import CardWeatherDay from '../card-weather-day/CardWeatherDay'

const CardsWeatherPeriod = () => {
  return (
    <section className={styles['cardsWeatherPeriod']}>
      <CardWeatherDay day='Lun' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Mar' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Mie' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Jue' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Vie' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Sab' condition='' tempMax='15' tempMin='-3' />
      <CardWeatherDay day='Dom' condition='' tempMax='15' tempMin='-3' />
    </section>
  )
}

export default CardsWeatherPeriod