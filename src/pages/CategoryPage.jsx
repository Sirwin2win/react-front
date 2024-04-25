import { useParams, useLoaderData } from "react-router-dom"

const CategoryPage = () => {
    const {id} = useParams();
    const category = useLoaderData();

  return <h1>{category.name}</h1>
};

const categoryLoader = async ({params}) =>{
    const res = await fetch(`http://127.0.0.1:8000/${params.id}/detail`);
    const data = await res.json();
    return data;
};

export {CategoryPage as default, categoryLoader}
