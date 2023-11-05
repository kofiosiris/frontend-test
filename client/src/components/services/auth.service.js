import axios from "axios";

const API_URL = "/api/v1/auth/";

const registerPartner = async (
  firstname,
  lastname,
  email,
  role,
  phoneNumber,
  password
) => {
  try {
    const userData = {
      firstname,
      lastname,
      email,
      role,
      phoneNumber,
      password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    };

    const response = await axios.post(
      API_URL + "register",
      JSON.stringify(userData),
      config
    );
    if (response.data) {
      localStorage.setItem("accessToken", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerCustomer = async (
  firstname,
  lastname,
  email,
  username,
  role,
  acceptedTermsAndConditions,
  phoneNumber,
  password
) => {
  try {
    const userData = {
      firstname,
      lastname,
      email,
      username,
      role,
      acceptedTermsAndConditions,
      phoneNumber,
      password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    };

    const response = await axios.post(
      API_URL + "register",
      JSON.stringify(userData),
      config
    );
    if (response.data) {
      localStorage.setItem("accessToken", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerCourier1 = async (
  firstname,
  lastname,
  email,
  username,
  role,
  vehicleMake,
  vehicleModel,
  vehicleType,
  licensePlateNumber,
  acceptedTermsAndConditions,
  phoneNumber,
  password
) => {
  try {
    const userData = {
      firstname,
      lastname,
      email,
      username,
      role,
      vehicleMake,
      vehicleModel,
      vehicleType,
      licensePlateNumber,
      acceptedTermsAndConditions,
      phoneNumber,
      password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    };

    const response = await axios.post(
      API_URL + "register",
      JSON.stringify(userData),
      config
    );
    if (response.data) {
      localStorage.setItem("accessToken", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "authenticate", {
    email,
    password,
  });
  if (response.data) {
    // const accessToken = response.data.accessToken;

    localStorage.setItem("accessToken", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userRole");
};

const AuthService = {
  registerPartner,
  registerCustomer,
  registerCourier1,
  login,
  logout,
};

export default AuthService;
