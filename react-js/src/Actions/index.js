import axios from "axios";

const url = "http://localhost:5000";

const actions = {
  login: async (name) => {
    const req = await axios.get(`${url}/users?username=${name}`);
    const res = await req.data;
    return res[0];
  },
  signup: async (body) => {
    const req = await axios.post(`${url}/users`, body);
    const res = await req.data;
    console.log(res);
    return res;
  },
  getServices: async () => {
    const req = await axios.get(`${url}/services`);
    const res = await req.data;
    return res;
  },
  getService: async (id) => {
    const req = await axios.get(`${url}/services/${id}`);
    const res = await req.data;
    return res;
  },
  submitBooking: async (body) => {
    const req = await axios.post(`${url}/bookings`, body);
    const res = await req.data;
    return res;
  },
  editProfileDetails: async (id, body) => {
    const req = await axios.patch(`${url}/users/${id}`, {
      email: body.newEmail,
      number: body.newNumber
    });
    const res = await req.data;
    return res;
  },
  deleteCarItem: async (id, carId) => {
    const req = await axios.get(`${url}/users/${id}`);
    const res = await req.data;
    const updatedCars = res.cars.filter(item => item.id !== carId);
    const postReq = await axios.patch(`${url}/users/${id}`, { cars: updatedCars });
    const postRes = await postReq.data;
    return postRes;
  },
  deleteAddressItem: async (id, addressId) => {
    const req = await axios.get(`${url}/users/${id}`);
    const res = await req.data;
    const updatedAddress = res.address.filter(item => item.id !== addressId);
    const postReq = await axios.patch(`${url}/users/${id}`, { address: updatedAddress });
    const postRes = await postReq.data;
    return postRes;
  },
  addCarItem: async (id, body) => {
    const req = await axios.get(`${url}/users/${id}`);
    const res = await req.data;
    res.cars.push(body);
    const postReq = await axios.put(`${url}/users/${id}`, res);
    const postRes = await postReq.data;
    return postRes;
  },
  addAdressItem: async (id, body) => {
    const req = await axios.get(`${url}/users/${id}`);
    const res = await req.data;
    res.address.push(body);
    const postReq = await axios.put(`${url}/users/${id}`, res);
    const postRes = await postReq.data;
    return postRes;
  },
  getUserBookings: async (name) => {
    const req = await axios.get(`${url}/bookings`);
    const res = await req.data;
    const bookings = res.filter(item => item.user.name === name);
    return bookings;
  },
  getReports: async () => {
    const bookingReq = await axios.get(`${url}/bookings`);
    const reviewReq = await axios.get(`${url}/reviews`);
    const res = { bookings: bookingReq.data, reviews: reviewReq.data }
    return res;
  },
  cancelBooking: async (id) => {
    const req = await axios.delete(`${url}/bookings/${id}`);
    await req.data;
    const bookingReq = await axios.get(`${url}/bookings`);
    const reviewReq = await axios.get(`${url}/reviews`);
    const reportsRes = { bookings: bookingReq.data, reviews: reviewReq.data }
    return reportsRes;
  }
};

export default actions;
