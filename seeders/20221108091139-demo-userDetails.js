"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserDetails", initialData);
  },
};

const initialData = [
  {
    first_name: "Santosh",
    last_name: "Singh",
    city: "Delhi",
    pincode: "20004",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Lovely",
    last_name: "Garg",
    city: "Lucknow",
    pincode: "52001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Parag",
    last_name: "Sood",
    city: "Bangalore",
    pincode: "72001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Jatin",
    last_name: "Saha",
    city: "Indore",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Prem",
    last_name: "Singh",
    city: "Delhi",
    pincode: "92003",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Arun",
    last_name: "Singh",
    city: "Indore",
    pincode: "20004",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Jays",
    last_name: "Nath",
    city: "Indore",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Rohit",
    last_name: "Singh",
    city: "Jaipur",
    pincode: "20098",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Rahul",
    last_name: "Garg",
    city: "Kolkata",
    pincode: "52001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Parag",
    last_name: "Modi",
    city: "Pune",
    pincode: "72001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Jatin",
    last_name: "Malik",
    city: "Pune",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Prem",
    last_name: "Valiya",
    city: "Gudgaon",
    pincode: "92003",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Nikhil",
    last_name: "Singh",
    city: "Mumbai",
    pincode: "20004",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Jays",
    last_name: "Nath",
    city: "Indore",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Happy",
    last_name: "Sharma",
    city: "New Delhi",
    pincode: "20098",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Narendra",
    last_name: "Kamath",
    city: "Kolkata",
    pincode: "52001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Chirag",
    last_name: "Thakur",
    city: "Pune",
    pincode: "72001",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Ali",
    last_name: "Khan",
    city: "Mumbai",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Sharad",
    last_name: "Patel",
    city: "Ahmedabad",
    pincode: "92003",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Ronak",
    last_name: "Maheta",
    city: "New Delhi",
    pincode: "20004",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: "Harshdeep",
    last_name: "Sodhi",
    city: "Ahmedabad",
    pincode: "62205",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];