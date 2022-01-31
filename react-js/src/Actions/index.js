import axios from "axios";

const url = "http://localhost:5000"
const actions = {
  login: async (name) => {
    const req = await axios.get(`${url}/users?username=${name}`);
    const res = await req.data;
    console.log(res[0]);
    return res[0];
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
    console.log(res);
    return res;
  }
};

export default actions;
