import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import styles from "./products.module.css";
import IMG1 from "../../../assets/1707289109360.png";
import IMG2 from "../../../assets/1713416670393.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productsSlice";
import { fetchSubCategories } from "../../../redux/slices/subCategorySlice";
import useQueryParams from '../../../hooks/useQueryParams'

const Products = () => {
  const { categoryId } = useParams()
  const products = useSelector((state) => state.products)
  const subCategories = useSelector((state) => state.subCategory)
  const [queryParams, updateQueryParams] = useQueryParams();
  const dispatch = useDispatch()

  console.log(products)
  const handleSubCategoryChange = ({ _id }) => {
    updateQueryParams({ subcategory: _id });
  };

  useEffect(() => {
    dispatch(fetchProducts({
      categoryId: categoryId,
      subcategoryId: queryParams.subcategory,
      page: queryParams.page
    }))

    dispatch(fetchSubCategories({
      categoryId: categoryId
    }))
  }, [dispatch, categoryId, queryParams])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          
          <h3 className={styles.sidebarTitle}>ქვეკატეგორიები</h3>

          {/* <button className="filtero">filter</button>
          <button className="cart" onClick={toggleCartVisibility}>cart</button> */}
          <button onClick={() => {
            updateQueryParams({ subcategory: null })
          }} className="filtero">Clear Filter</button>
          {subCategories.status === 'loading' 
            ? (
              <div>
                Loading...
              </div>
            )
            : (
              <ul className={styles.categoryList}>
                {subCategories.data && subCategories.data.map((subCategory, index) => (
                  <li 
                    key={index} 
                    className={`${styles.categoryItem}`} 
                  >
                    <button onClick={() => handleSubCategoryChange({ _id: subCategory._id })}>
                      {subCategory.name}
                    </button>
                  </li>
                ))}
              </ul>
            )
          }
        </div>

        <div className={styles.mainContent}>



        <div className={styles.filterwrapper}>
            <div className={styles.actionsContainer}>
              <div className={styles.dropdown}>
                <button className={styles.dropdownButton}>ფილტრი</button>
                <ul className={styles.dropdownMenu}>
                  {["თარიღი ზრდადი", "თარიღი კლებადი", "ფასი ზრდადი", "ფასი კლებადი", "ახალი"].map((option) => (
                    <li key={option}>
                      {/* <button onClick={() => handleSortChange(option)}>{option}</button> */}
                    </  li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
        

        <div className={styles.list}>
            {products.status === 'loading' 
              ? [1,2,3,4,5].map((item) => (
                <div className={styles.item} style={{background: 'gray'}}>
                  
                </div>
              ))
              : products?.data?.length > 0 ? (
                products.data.map(product => (
                  <div className={styles.item} key={product.productId._id}>
                    <div className={styles.imager}>
                      <Link to={product.productId._id}>
                        <img src={product.productId.images[0] || 'https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg'} alt={product.name} />
                        <div className={styles.additional}>
                          <RiShoppingCart2Line className={styles.cartIcon} />
                        </div>
                        <div className={styles.serialnumber}>{product.prod_id}</div>
                        <div className={styles.name}>
                          {product.name} <br/> {product.description}
                          {/* {!product.isNew && <span className={styles.newLabel}> ახალი </span>} */}
                        </div>
                      </Link>
                      <div className={styles.price}>{product.totalPrice}ლ</div>
                      <div className={styles.date}>{new Date(product.productId.createdAt).toISOString().split("T")[0]}</div>
                      <div className={`${styles.stockStatus} ${product.quantity > 0 ? styles.inStock : styles.outOfStock}`}>
                        {product.quantity > 0 ? (
                          <>
                            <FaCheck className={styles.checkIcon} />
                            მარაგშია {product.quantity}
                          </>
                        ) : (
                          <>
                            <ImCross className={styles.crossIcon} />
                            ამოიწურა
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                  <div>Empty</div>
              )
            
            }
          </div>

          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              disabled={products.page === 0}
              onClick={() => queryParams.page > 0 && updateQueryParams({ page: queryParams.page - 1 })}
            >
              &lt;
            </button>

  
            {queryParams.page ? queryParams.page : 0}
           
            

            <button
              className={styles.pageButton}
              disabled={queryParams.page === products.pages}
              onClick={() => queryParams.page < products.pages && updateQueryParams({ page: queryParams.page + 1 })}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
