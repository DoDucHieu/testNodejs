import { useState } from "react";
import axios from "axios";

export default function ModalAddNew({
  handleOpenModalAddNew,
  handleOnclickAddNew,
}) {
  let [productId, setProductId] = useState("");
  let [category, setCategory] = useState("");

  let [productName, setProductName] = useState("");
  let [cost, setCost] = useState("");

  let handleOnclickClose = () => {
    handleOpenModalAddNew();
  };

  let handleOnclickSaveChange = async () => {
    let productInfor = {
      productId,
      category,
      productName,
      cost,
    };
    console.log("product infor: ", productInfor);
    handleOnclickAddNew(productInfor);
  };

  let handleOnchange = (e, type) => {
    if (type === "productId") {
      setProductId(e.target.value);
    }
    if (type === "category") {
      setCategory(e.target.value);
    }
    if (type === "productName") {
      setProductName(e.target.value);
    }
    if (type === "cost") {
      setCost(e.target.value);
    }
  };
  return (
    <>
      <div class="modal fade show  d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">ADD NEW PRODUCT</h5>
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
                    value={productId}
                    onChange={(e) => handleOnchange(e, "productId")}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Category:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={category}
                    onChange={(e) => handleOnchange(e, "category")}
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
