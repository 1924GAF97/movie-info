import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useQuery } from "../components/hooks/useQuery";

export default function Search() {
    const query = useQuery();
    const search = query.get("search");
    const navigate = useNavigate();
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={search}
            placeholder ="Title"
            aria-label="Search Movies"
            onChange={(e) => {
              const value = e.target.value;
              navigate(`/?search=` + value);
            }}
          />
            <BiSearchAlt  size={20} color="black" className={styles.searchButton}/>
        </div>
      </form>
    );
  }