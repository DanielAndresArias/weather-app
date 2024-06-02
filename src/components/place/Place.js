import styles from "@/components/place/Place.module.scss"

const Place = () => {
  return (
    <section className={styles['place']}>
      <img src="/images/cordoba-argentina.jpg"/>
      <h3>Córdoba, Argentina</h3>
    </section>
  )
}

export default Place
