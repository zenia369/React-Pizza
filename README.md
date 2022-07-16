# Hello my friend.
It is repo for react-pizza and you can see my progress in development this site. 

Here we are had link: <https://react-pizza-psi.vercel.app/>

## Pizza texnology
In this project I`m use Mock API, RTK, axios.

### Api`s
- API for pizzas - <https://62d1a098dccad0cf176b3d9d.mockapi.io/pizzas> it`s list items of pizzas.
- API for filter - <https://62d1a098dccad0cf176b3d9d.mockapi.io/filter> it`s list itmes of filters. But the logic works filter describe in sortList.js. 
- API for sort - <https://62d1a098dccad0cf176b3d9d.mockapi.io/sort> it`s list items of sorts. But the logic works sort describe in sortList.js.

### RTK
So, redux for this project it`s must have. Created three slices: filter, sort, pizzas, - in those files discribes a logic works some components and used createAsyncThunk for fetching data. Data fetching start when app was start, - you can see in App.js.