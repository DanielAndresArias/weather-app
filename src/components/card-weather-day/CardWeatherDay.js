import styles from '@/components/card-weather-day/CardWeatherDay.module.scss';

const CardWeatherDay = ({ day, condition, tempMax, tempMin }) => {
  return (
    <article className={styles['card-day']}>
      <header className={styles['card-day-header']}>
        <h4>{day}</h4>
      </header>
      <div className={styles['card-day-content']}>
        <img src='/icons/flat/parcialmente-nublado.png'/>
      </div>
      <footer className={styles['card-day-footer']}>
        <span>{tempMax}</span>
        <span>{tempMin}</span>
      </footer>
    </article>
  )
}

export default CardWeatherDay