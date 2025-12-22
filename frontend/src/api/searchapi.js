import axiosInstance  from "./axiosInstance";

export default async function searchEntities(option,keyword,page=1,pageSize=10,sortBy="name_asc"){
   console.log(`searchEntities search results for type: ${option}, keyword: ${keyword},page:${page},pageSize:${pageSize},sortBy:${sortBy}`); 
    const res=await axiosInstance.get("/public/search",
        {   
            params: {
                type: option,
                q: keyword,
                page: page,
                page_size: pageSize,
                sort_by: sortBy
              }
        });
    return res.data;
}