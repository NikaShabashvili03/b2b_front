import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from "./categories.module.css";
import IMG1 from "../../../assets/99e99428e348aa46b08de96da6e92ad5.png";
import IMG2 from "../../../assets/images.png";
import Header from '../../Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slices/categorySlice';

// const categories = [
//     {
//         id: 1,
//         title: 'სანტექნიკა',
//         image: IMG1,
//         links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
//     },
//     {
//         id: 2,
//         title: 'ელექტროობა',
//         image: IMG2,
//         links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
//     },
//     {
//         id: 3,
//         title: 'ელექტროობა',
//         image: IMG2,
//         links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
//     },
//     {
//         id: 4,
//         title: 'სანტექნიკა',
//         image: IMG1,
//         links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
//     },
//     {
//         id: 5,
//         title: 'სანტექნიკა',
//         image: IMG1,
//         links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
//     },
//     {
//         id: 6,
//         title: 'ელექტროობა',
//         image: IMG2,
//         links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
//     },
// ];

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
