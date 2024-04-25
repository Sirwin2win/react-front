import { useParams, useLoaderData } from "react-router-dom"

const ProductPage = () => {
    const {id} = useParams();
    const product = useLoaderData();

  return <h1>{product.title}</h1>
};

const productLoader = async ({params}) =>{
    const res = await fetch(`http://127.0.0.1:8000/${params.id}/product/`);
    const data = await res.json();
    return data;
};
export {ProductPage as default, productLoader}
