'use server';

import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function createUser() {
  //   const uuid = uuidv4();

  const user = {
    username: 'johnny',
    email: 'nico@gmail.com',
    password: '1234',
  };

  const response = await fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  const createdUser = await response.json();
  //   console.log('response: ', createdUser);

  return createdUser;
}

// export async function generateCookie() {
//     const cookieStore = await cookies()

//     if(cookieStore)
// }

export async function getAllUsers() {
  fetch('https://fakestoreapi.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export async function getSingleUser(id: number) {
  fetch(`https://fakestoreapi.com/users/${id.toString()}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export async function load() {
  try {
    const newUser = await createUser();
    console.log('Created user:', newUser);
    const users = await getAllUsers();
    console.log('All users:', users);
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleCart(id: number) {
  const res = await fetch(`https://fakestoreapi.com/carts/${id.toString()}`);

  if (!res.ok) throw new Error('Error Fetching Cart');

  const cart = await res.json();

  return cart;
}

export async function addToCart() {
  const cart = { userId: 11, products: [{ id: 1 }] };
  fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
