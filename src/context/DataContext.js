import React, { useState, useEffect, createContext } from "react";
import filtersList from '../components/FilterList';
import { articlesData } from '../components/ArticlesData';

const USER_KEY = 'user';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [mealType, setMealType] = useState('');
  const [mealsInBasket, setMealsInBasket] = useState([]);
  const [activeElements, setActiveElements] = useState([]);
  const [scrollTopRef, setScrollTopRef] = useState(null);

  const [articlesList, setArticlesList] = useState(articlesData);

  const addMealToBasket = ({ id, basketIcon: image, title, description, price }) => {
    const meal = {
      id,
      image,
      title,
      description,
      price,
      amount: 1
    };

    setMealsInBasket(prev => [...prev, meal]);
  };

  const removeMealFromBasket = (id) => {
    setMealsInBasket(mealsInBasket.filter((item) => item.id !== id));
    setActiveElements(activeElements.filter((itemId) => itemId !== id));
  };

  const increaseAmount = (id) => {
    setMealsInBasket(prev => prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1
        };
      }
      return item;
    }));
  };

  const decreaseAmount = (id) => {
    setMealsInBasket(prev => prev.map((item) => {
      if (item.id === id) {
        if (item.amount > 1) {
          return {
            ...item,
            amount: item.amount - 1
          };
        } else {
          removeMealFromBasket(id);
        }
      }
      return item;
    }));
  };

  const scrollToComponentTop = () => {
    if (scrollTopRef && scrollTopRef.current) {
      scrollTopRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    mealType: mealType,
    setMealType: setMealType,
    mealsInBasket: mealsInBasket,
    setMealsInBasket: setMealsInBasket,
    addMealToBasket: addMealToBasket,
    removeMealFromBasket: removeMealFromBasket,
    increaseAmount: increaseAmount,
    decreaseAmount: decreaseAmount,
    activeElements: activeElements,
    setActiveElements: setActiveElements,
    scrollToComponentTop: scrollToComponentTop,
    setScrollTopRef: setScrollTopRef,
    filtersList: filtersList,
    articlesList: articlesList,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};