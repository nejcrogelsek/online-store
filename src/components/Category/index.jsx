import React from 'react'
import FirstLevelCategory from './FirstLevelCategory/FirstLevelCategory'

const CategoryPage = () => {
    return (
        <div id="category-page">
            <div className="category-title">
                <h1>Category name</h1>
            </div>
            <FirstLevelCategory />
        </div>
    )
}

export default CategoryPage
