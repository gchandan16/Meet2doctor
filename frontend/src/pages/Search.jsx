import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Resulthead from "../components/Resulthead";
import ResultLayoutType from "../components/ResultLayoutType";
import DoctorResult from "../components/DoctorResult";
import searchEntities  from "../api/searchapi";


export default  function Search() {  
  const [page,setPage]=useState(1);
  const [pageSize]=useState(5);
  const [totalRecords,setTotalRecords]=useState(0);
  const {type,keyword}=useParams();
  const [result,setResults]=useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy,setSortBy]=useState("name_asc");
  useEffect(()=>{
   if(!type || !keyword){
    return;
   }

   const fetchData=async()=>{
    try{
        setLoading(true);
        console.log(`Fetching search results for type: ${type}, keyword: ${keyword},page:${page},pageSize:${pageSize}, sortBy:${sortBy}`);
  
        const res = await searchEntities(type, keyword, page, pageSize, sortBy);
        console.log("API response:", res);
        // Always force array
        const safeResults = Array.isArray(res?.data) ? res.data : [];
        // Always force number
        const safeTotalRecords = Number(res?.totalRecords) || 0;
        // Set state (guaranteed safe)
        setResults(safeResults);
        setTotalRecords(safeTotalRecords);


    }
    catch(err){
      console.error("Error fetching search results:", err);
    }
    finally{
      setLoading(false);
    }
   };

   fetchData();

  },[type,keyword,page,sortBy]);
  return (
    <>
      <Resulthead keyword={keyword} type={type}  pageSize={pageSize}  totalRecords={totalRecords}/>
      <ResultLayoutType sortBy={sortBy} onSortChange={setSortBy} />

      <DoctorResult  results={result} loading={loading} page={page} pageSize={pageSize}  totalRecords={totalRecords} onPageChange={setPage} />

    </>
  );
}