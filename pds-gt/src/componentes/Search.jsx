import styled from "styled-components";
import '../App.css'
import '../styles/search.css'

const Search = () => {
    return ( 
        <>
            <div className="search-area " >
                <input type="text" name="" id="search-input" className="w-40%" placeholder="Pesquisar produto..."/>
                <div className="btn-search">
                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000" /></svg>
                </div>
            </div>
        </>
     );
}
 
export default Search;