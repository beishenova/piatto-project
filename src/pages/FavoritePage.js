import React from "react";
import Favorite from "../components/Favorite/Favorite";
import MainLayout from "../layouts/MainLayout";

const FavoritePage = () => {
  return (
    <MainLayout>
      <Favorite />
    </MainLayout>
  );
};

export default FavoritePage;