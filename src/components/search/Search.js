import styles from '@/components/search/Search.module.scss'

const Search = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
  }
  return (
    <article className={styles['search-container']}>
      <form onSubmit={handleOnSubmit} className={styles['search-form']}>
        <input type="text" className={styles['search-input']} id="search" placeholder="Córdoba, Tanti, Carlos Paz..." />
        <button type="submit" className={styles['search-button']}>
          <img src="/icons/search.png" alt="Ícono para buscar" className={styles['icon']}/>
        </button>
      </form>
    </article>
  );
};

export default Search
