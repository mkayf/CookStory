import React from "react";
import { Container, CatCard, HeadingAndLine } from "./index";
import BreakfastImg from '../assets/breakfast.jpg'
import LunchImg from '../assets/lunch.jpg'
import DinnerImg from '../assets/dinner.jpg'
import SnackImg from '../assets/snack.jpg'

function Categories() {

  const categories = [
    {
      name : 'Breakfast',
      image : BreakfastImg,
      path: '/categories/breakfast'
    },
    {
      name : 'Lunch',
      image : LunchImg,
      path: '/categories/lunch'
    },
    {
      name : 'Dinner',
      image : DinnerImg,
      path: '/categories/dinner'
    },
    {
      name : 'Snacks',
      image : SnackImg,
      path: '/categories/snacks'
    }
  ];

  return (
    <Container>
      <div className="mt-4 md:mt-10">
        <HeadingAndLine heading="Find Your Perfect Recipe by Category" line="No matter your mood, we have a recipe to match." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-10 mt-12">
          {
            categories.map((category, i) => (
              <CatCard key={i} name={category.name} image={category.image} path={category.path} />
            ))
          }
        </div>
      </div>
    </Container>
  );
}

export default Categories;
