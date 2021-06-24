import { useAppContext } from "../../Contexts/AppContext";
import buttonNext from "../../assets/icons/mover-proxima-branco.png"
import "./Pagination.scss"

export function Pagination() {
  const { loading, nextPage, setCurrentPage, prevPage, currentPage } = useAppContext();

  const PageNumber = ( 
    currentPage.includes("page")
  ) ? (
    currentPage.split("=")[1].includes("&") ? currentPage.split("=")[1].split("&")[0] : currentPage.split("=")[1]
  ) : (
  "1"
  ) 

  return (
    <div className="componentPagination">
      <button
        onClick={() => { setCurrentPage(prevPage) }}
        disabled={!prevPage || loading}
        className="buttonBack"
      >
        <img src={buttonNext} alt="Voltar uma Pagina" />
      </button>
      <br />
      <span className="numberPagination">
        {PageNumber}
      </span>
      <br />
      
      <button
        onClick={() => { setCurrentPage(nextPage) }}
        disabled={!nextPage || loading}
        className="buttonNext"
      >
        <img src={buttonNext} alt="Avança para proxima pagina" />
      </button>
    
    </div>
  );
}