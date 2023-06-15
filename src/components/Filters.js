import React, { useState, memo } from "react";
import classnames from 'classnames';

import { Filter } from "./Filter";
import { useDataContext } from "../hooks/useDataContext";

const Filters = () => {
    const { setMealType, scrollToComponentTop, filtersList } = useDataContext();
    const [activeItem, setActiveItem] = useState(filtersList[0]);

    const changeActiveItem = (item) => {
        setActiveItem(item);
        setMealType(item.type);
        scrollToComponentTop();
    };

    return (
        <div className='filters-container'>
            {filtersList.map((item) => (
                <Filter
                    className={classnames('filter', { 'filter-active': activeItem.id === item.id })}
                    image={item.image}
                    title={item.title}
                    onClick={() => changeActiveItem(item)}
                    key={item.id}
                />
            ))}
        </div>
    );
};

export default memo(Filters);