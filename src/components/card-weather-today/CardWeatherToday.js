import styles from '@/components/card-weather-today/CardWeatherToday.module.scss'

const CardWeatherToday = () => {
  return (
    <section className={styles['card']}>
      <header className={styles['card-header']}>
        <img src="/icons/flat/parcialmente-nublado.png"/>
      </header>
      <div className={styles['card-temp-info']}>
        <span>12</span>
        <span>°C</span>
      </div>
      <div className={styles['card-time-info']}>
        <p>Monday, <span>21:00</span></p>
      </div>
    </section>
  )
}

export default CardWeatherToday
