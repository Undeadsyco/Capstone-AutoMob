import axios from "axios";

const url = "http://localhost:5000"
const actions = {
  getServices: async () => {
    const req = await axios.get(`${url}/services`);
    const res = await req.data;
    console.log(res)
    return res;
  }
};

export default actions;
