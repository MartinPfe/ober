import React from "react";
import mock from "../../mock/user";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardStory = {
  component: RestaurantCard,
  title: "Restaurant Card",
};

export default RestaurantCardStory;

const Template = (args) => <RestaurantCard user={mock.user} {...args} />;

export const Default = Template.bind({});
Default.args = {
  restaurant: {
    id: "1",
    name: "Prinston",
    address: "Ramos Mejía ",
  },
};
