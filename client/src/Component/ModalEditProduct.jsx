import { useEffect, useState } from "react";
import axios from "axios";

export default function ModalEditProduct({
  handleOpenModalEdit,
  productInfor,
  handleOnclickEdit,
}) {
  let [productName, setProductName] = useState(productInfor.productName);
  let [cost, setCost] = useState(productInfor.cost);
  let handleOnclickClose = () => {
    handleOpenModalEdit();
  };
  let userInfor = JSON.parse(localStorage.getItem("userTest"));

  let authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${userInfor.accessToken}`,
    },
  });

  let handleOnchange = (e, type) => {
    if (type === "productName") {
      setProductName(e.target.value);
    }
    if (type === "cost") {
      setCost(e.target.value);
    }
  };

  let handleOnclickSaveChange = () => {
    let data = {
      productId: productInfor.productId,
      productName,
      cost,
    };
    console.log("data:", data);
    handleOnclickEdit(data);
  };

  return (
    <>
      <div class="modal fade show  d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">EDIT PRODUCT</h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Product ID:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    disabled
                    value={productInfor?.productId}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    disabled
                    value={productInfor?.category}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Product name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={productName}
                    onChange={(e) => handleOnchange(e, "productName")}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Cost:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={cost}
                    onChange={(e) => handleOnchange(e, "cost")}
                  ></input>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleOnclickClose}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleOnclickSaveChange}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
