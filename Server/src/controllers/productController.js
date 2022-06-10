import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

let fakeProduct = [
  {
    productId: "pr1",
    category: "jeans",
    productName: "Ao so mi",
    cost: 1000,
  },
  {
    productId: "pr2",
    category: "dresses",
    productName: "Ao hoddies",
    cost: 2000,
  },
];

let fakeRate = [
  {
    productId: "pr1",
    userName: "tranducbo@gmail.com",
    rate: 5,
  },
  {
    productId: "pr1",
    userName: "ngobakha@gmail.com",
    rate: 2,
  },
  {
    productId: "pr2",
    userName: "huanhoahong@gmail.com",
    rate: 2,
  },
];
//get all product
let getAllProduct = (req, res) => {
  return res.status(200).json({
    errCode: 0,
    errMessage: "Get all product success!",
    data: fakeProduct,
  });
};

let addNewProduct = (req, res) => {
  let productInfor = req.body;
  let check = false;
  fakeProduct.forEach((item) => {
    if (item.productId === productInfor.productId) {
      check = true;
    }
  });
  if (check) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "ProductId is already exist!",
    });
  } else {
    fakeProduct.push(productInfor);
    return res.status(200).json({
      fakeProduct,
    });
  }
};

let editProduct = (req, res) => {
  let productInfor = req.body;
  if (productInfor) {
    fakeProduct.forEach((item) => {
      if (item.productId === productInfor.productId) {
        item.productName = productInfor.productName;
        item.cost = productInfor.cost;
        return res.status(200).json({
          errCode: 0,
          errMessage: "Edit product success",
        });
      }
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Failed",
    });
  }
};

let deleteProduct = (req, res) => {
  let productId = req.body.productId;
  console.log(productId);
  fakeProduct.forEach((item, index) => {
    if (item.productId === productId) {
      fakeProduct.splice(index, 1);
      return res.status(200).json({
        errCode: 0,
        errMessage: "Delete product success!",
      });
    }
  });
  return res.status(200).json({
    errCode: 1,
    errMessage: "Delete product failed!",
  });
};

//rate

let handleAverageRate = (productId) => {
  let sum = 0;
  let count = 0;
  fakeRate.map((item, index) => {
    if (item.productId === productId) {
      sum += item.rate;
      count++;
    }
  });
  if (sum === 0) {
    return "No rate";
  } else {
    return sum / count;
  }
};

let getRate = (req, res) => {
  let productId = req.body.productId;
  if (productId) {
    let averageRate = handleAverageRate(productId);
    return res.status(200).json({
      errCode: 0,
      errMessage: "Get average success",
      averageRate: averageRate,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Failed",
    });
  }
};

let sendRate = (req, res) => {
  let data = req.body;
  if (data) {
    let index = 0;
    let check = false;
    fakeRate.forEach((item, index) => {
      if (
        data.userName === item.userName &&
        data.productId === item.productId
      ) {
        index = index;
        check = true;
      }
    });
    if (check) {
      fakeRate[index].rate = data.rate;
    } else {
      fakeRate.push(data);
    }
    return res.status(200).json({
      errCode: 0,
      errMessage: "Send rate success",
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Failed",
    });
  }
};

let getAllCategory = (req, res) => {
  let arrCategory = fakeProduct.map((item, index) => {
    return item.category;
  });
  return res.status(200).json({
    errCode: 0,
    errMessage: "Get all category success",
    arrCategory,
  });
};

let getProductByCategory = (req, res) => {
  let arrCategory = req.body.arrCategory;
  if (arrCategory && arrCategory.length > 0) {
    let arrProduct = [];
    fakeProduct.map((item, index) => {
      arrCategory.map((category) => {
        if (item.category === category) {
          arrProduct.push(item);
        }
      });
    });
    return res.status(200).json({
      errCode: 0,
      errMessage: "Get product by category success",
      data: arrProduct,
    });
  } else {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing data category",
    });
  }
};

let getProductBySearch = (req, res) => {
  let key = req.body.keyWord;
  if (key) {
    let arr = [];
    fakeProduct.map((item) => {
      if (item.productName.includes(key)) {
        arr.push(item);
      }
    });
    if (arr && arr.length > 0) {
      console.log("check arr: ", arr);
      return res.status(200).json({
        errCode: 0,
        errMessage: "Find product by key success",
        data: arr,
      });
    } else {
      return res.status(200).json({
        errCode: 0,
        errMessage: "No found",
        data: [],
      });
    }
  } else {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Missing key word",
    });
  }
};

//export
const productController = {
  getAllProduct,
  addNewProduct,
  editProduct,
  deleteProduct,
  getRate,
  sendRate,
  getAllCategory,
  getProductByCategory,
  getProductBySearch,
};
export default productController;
