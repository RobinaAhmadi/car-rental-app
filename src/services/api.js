const BASE_URL = "http://localhost:3000"; 

async function request(path, method = "GET", body) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data;
  } catch (err) {
    throw err;
  }
}

export const api = {
  signup: (user) => request("/users/signup", "POST", user),
  login: (credentials) => request("/users/login", "POST", credentials),
  getCars: () => request("/cars", "GET"),
  getCarById: (id) => request(`/cars/${id}`, "GET"),
  addCar: (car) => request("/cars", "POST", car),
};
