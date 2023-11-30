const apiUrl = "https://menuapi-23fs.onrender.com/api/v1/menus";

const fetchMenus = async (menuName) => {
  const response = await fetch(`${apiUrl}?name=${menuName}`);
  const menus = await response.json();
  console.log(menus);
};

fetchMenus("Orange juice");
