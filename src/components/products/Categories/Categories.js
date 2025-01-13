import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from "./categories.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slices/categorySlice';


const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    if(categories.status === 'loading') return <div>...</div>
    
    return (
        <div className={styles.container}>
            <h1>კატეგორიები</h1>
            <div className={styles.grid}>
                {categories.data && categories?.data?.map(category => (
                    <div className={styles.card} key={category._id}>
                        <h2>{category.name}</h2>
                            <Link to={`${category._id}/products/`} className={`${styles.viewMoreButton} ${styles.a}`}>View More</Link>
                            <img src={category.image} alt={`Image for ${category.title}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
