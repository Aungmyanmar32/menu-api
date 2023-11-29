## MENU API for test

### How to use

# Menu

## Get all menu

```js
https://menuapi-23fs.onrender.com/api/v1/menus
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menus";

const fetchMenus = async () => {
  const response = await fetch(apiurl);
  const menus = await response.json();
  console.log(menus);
};

fetchMenus();
```

##

## Get menu by id

```js
https://menuapi-23fs.onrender.com/api/v1/menus/id-here
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menus";

const fetchMenus = async (menuId) => {
  const response = await fetch(`${apiurl}/${menuId}`);
  const menus = await response.json();
  console.log(menus);
};

fetchMenus(23);
```

##

## Get menu by name

```js
https://menuapi-23fs.onrender.com/api/v1/menus?name=menu-name-here
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menus";

const fetchMenus = async (menuName) => {
  const response = await fetch(`${apiurl}?name=${menuName}`);
  const menus = await response.json();
  console.log(menus);
};

fetchMenus("Orange juice");
```

##

## Get menu by menu category id

```js
https://menuapi-23fs.onrender.com/api/v1/menus?mcid=mcid-here
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menus";

const fetchMenus = async (mcid) => {
  const response = await fetch(`${apiurl}?mcid=${mcid}`);
  const menus = await response.json();
  console.log(menus);
};

fetchMenus(5);
```

##

# Menu Categories

## Get all menu categories

```js
https://menuapi-23fs.onrender.com/api/v1/menu-categories
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menu-categories";

const fetchMenus = async () => {
  const response = await fetch(apiurl);
  const menuCategories = await response.json();
  console.log(menuCategories);
};

fetchMenus();
```

##

## Get menu category by id

```js
https://menuapi-23fs.onrender.com/api/v1/menu-categories/id-here
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menu-categories";

const fetchMenus = async (menuId) => {
  const response = await fetch(`${apiurl}/${menuId}`);
  const menuCategories = await response.json();
  console.log(menuCategories);
};

fetchMenus(23);
```

##

## Get menu category by name

```js
https://menuapi-23fs.onrender.com/api/v1/menu-categories?name=menu-category-name-here
```

```js
// usage

const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menu-categories";

const fetchMenus = async (name) => {
  const response = await fetch(`${apiurl}?name=${name}`);
  const menuCategories = await response.json();
  console.log(menuCategories);
};

fetchMenus("Salad");
```

##
