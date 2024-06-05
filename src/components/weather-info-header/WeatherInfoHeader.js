import styles from "@/components/weather-info-header/WeatherInfoHeader.module.scss"
import { useState } from "react"

const WeatherInfoHeader = () => {
  const [period, setPeriod] = useState('today')
  const [tempUnit, setTempUnit] = useState('celsius')
  const handleSelectPeriod = ({ selectPeriod }) => {
    if (period === null || period === selectPeriod) return
    setPeriod(selectPeriod)
  }
  const handleSelectTempUnit = ({ selectTempUnit }) => {
    if (tempUnit === null || tempUnit === selectTempUnit) return
    setTempUnit(selectTempUnit)
  }
  return (
    <header className={styles['weather']}>
      <ul className={styles['weather-period']}>
        <li className={`${period === 'today' ? styles['active'] : ''}`} onClick={() => handleSelectPeriod({selectPeriod: 'today'})}>Hoy</li>
        <li className={`${period === 'week' ? styles['active'] : ''}`} onClick={() => handleSelectPeriod({selectPeriod: 'week'})}>Semanal</li>
      </ul>
      <ul className={styles['temp-unit']}>
        <li className={`${tempUnit === 'celsius' ? styles['active'] : ''}`} onClick={() => handleSelectTempUnit({selectTempUnit: 'celsius'})}><span>°C</span></li>
        <li className={`${tempUnit === 'fahrenheit' ? styles['active'] : ''}`} onClick={() => handleSelectTempUnit({selectTempUnit: 'fahrenheit'})}><span>°F</span></li>
      </ul>
    </header>
  )
}

export default WeatherInfoHeader
