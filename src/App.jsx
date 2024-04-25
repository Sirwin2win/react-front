import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import CategoryListing from './pages/CategoryListing';
import About from './pages/About';
import Contact from './pages/Contact';
import AddCategoryPage from './pages/AddCategoryPage';
import AddProductPage from './pages/AddProductPage';
import axios from 'axios';
import CatDetail from './pages/CatDetail';
import ManageCategory from './pages/ManageCategory';
import CategoryPage, {categoryLoader} from './pages/CategoryPage';
import ProductPage, {productLoader} from './pages/ProductPage';
import EditCategoryPage from './pages/EditCategoryPage';
import Products from './pages/Products';
import ProdDetail from './pages/ProdDetail';
import ManageProduct from './pages/ManageProduct';
import EditProductPage from './pages/EditProductPage';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<MainLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path='/category-listing' element={<CategoryListing />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='/add-category' element={<AddCategoryPage  AddCategorySubmit={addCategory} />} />
//     </Route>

//   )
// );

const App = () => {

  
  // Add New Category
  const addCategory = async (newCategory) =>{
    const res = await axios.post('http://127.0.0.1:8000/create/', newCategory).then((response) => {
      console.log(response.status, response.data.token);
    });
  };

  // Update Category
    // const editCategory = async (category) =>{
    //   const res = await axios.put(`http://127.0.0.1:8000/update/${category.id}/`, updatedCategory).then((response) => {
    //     console.log(response.status, response.data.token);
    //   });
    // };

    const editCategory = async (category) => {
      const res = await fetch(`http://127.0.0.1:8000/update/${category.id}/`, {
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(category),
      });
      return;
    }

// 'update-product/<int:pk>/'
    const editProduct = async (product) => {
      const res = await fetch(`http://127.0.0.1:8000/update-product/${product.id}/`, {
        method : 'PUT',
        headers : {
          'Content-Type' : 'multipart/form-data',
        },
        body : JSON.stringify(product),
      });
      return;
    }


    // Add New Product
    const addProduct = async (newProduct) =>{
      const res = await fetch('http://127.0.0.1:8000/product/', {
        method : 'POST',
        headers : {
          'content-Type' : 'multipart/form-data',
        },
        body : JSON.stringify(newProduct),
      });
      // const data = await XPathResult.json()
      return;
   
    };

  //Delete Category


  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/delete/${id}/`);
      // console.log("Post deleted:", id);
      setCategory(category.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/category-listing' element={<CategoryListing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories/:id' element={<CategoryPage />} loader={categoryLoader} />
        <Route path='/:id/detail' element={<CatDetail />} />
        <Route path='/:id/product' element={<ProdDetail />} />
        <Route path='/add-category' element={<AddCategoryPage  AddCategorySubmit={addCategory} />} />
        <Route path='/add-product' element={<AddProductPage AddProductSubmit={addProduct}/>} />
        <Route path='/:id/edit-category' element={<EditCategoryPage EditCategorySubmit={editCategory} />} loader={categoryLoader} />
        <Route path='/:id/edit-product' element={<EditProductPage EditProductSubmit={editProduct} />} loader={productLoader} />
        <Route path='/manage-category' element={<ManageCategory />} />
        <Route path='/manage-product' element={<ManageProduct />} />
        <Route path='/products' element={<Products />} />
      </Route>
  
    )
  );

  return <RouterProvider router={router}  />;
}

export default App
