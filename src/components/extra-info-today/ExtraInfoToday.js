import styles from "@/components/extra-info-today/ExtraInfoToday.module.scss"

const ExtraInfoToday = () => {
  return (
    <section className={styles['extra-info-today']}>
      <div className={styles['weather']}>
        <img src="/icons/outlined/parcialmente-nublado.png"/>
        <p>Parcialmente nublado</p>
      </div>
      <div className={styles['rain']}>
        <img src="/icons/outlined/humedad.png"/>
        <p>Lluvia - 50%</p>
      </div>
    </section>
  )
}

export default ExtraInfoToday;
