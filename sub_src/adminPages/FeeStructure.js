import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FeeStructure() {

    const navigate = useNavigate();
    const [addFeeData, setAddFeeData] = useState({
        batchId: "",
        tuitionFee: "",
        hostelFee: "",
        messFee: "",
    });

    const [updateFeeData, setUpdateFeeData] = useState({
        batchId: "",
        tuitionFee: "",
        hostelFee: "",
        messFee: "",
    });

    // To modify the addFeeData whenever some data is filled in the form.
    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setAddFeeData((prevData) => ({ ...prevData, [name]: value }));
    };

    // To modify the addFeeData whenever some data is filled in the form.
    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateFeeData((prevData) => ({ ...prevData, [name]: value }));
    };

    //Handles the sending request and receiving response part of add submit event.
    const handleAddSubmit = async (e) => {
        e.preventDefault();
        console.log("In handle submit of add feestructure of feeStructure");
        const sendPost = async () => {
            try {
                const response = await axios.post("http://localhost:8080/admin/feeStructure", addFeeData);
                console.log(response);
                console.log("No error");
                processResponse(response);
            } catch (error) {
                console.error(error);
            }
        };
        await sendPost();
    };

    // Handles the sending request and receiving response part of add submit event.
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        console.log("In handle submit of update feestructure of feeStructure");
        const sendPut = async () => {
            try {
                const response = await axios.put(`http://localhost:8080/admin/feeStructure/{updateFeeData.batchId}`, updateFeeData);
                console.log(response);
                console.log("No error");
                processResponse(response);
            } catch (error) {
                console.error(error);
            }
        };
        await sendPut();
    };


    // Handles redirecting based on the response.
    function processResponse(response) {
        if (response.data) {
            navigate("/admin/feeStructure");
        } else {
            navigate("/error");
        }
    }


    return (
        <div class="container mt-5">
            <h1 class="text-center">Fee Structure Management</h1>
            <div class="row mt-5">
                <div class="col-md-6">
                    <h2 class="text-center">Add Fee Structure</h2>
                    <form onSubmit={handleAddSubmit}>
                        <div class="form-group">
                            <label htmlFor="batchId">Batch ID</label>
                            <input
                                type="number"
                                className="form-control"
                                id="batchId"
                                name="batchId"
                                value={addFeeData.batchId}
                                onChange={handleAddChange}
                                placeholder="Enter Batch ID"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="tuitionFee">tuitionFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="tuitionFee"
                                name="tuitionFee"
                                value={addFeeData.tuitionFee}
                                onChange={handleAddChange}
                                placeholder="Enter tuitionFee"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="hostelFee">hostelFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="hostelFee"
                                name="hostelFee"
                                value={addFeeData.hostelFee}
                                onChange={handleAddChange}
                                placeholder="Enter hostelFee"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="messFee">messFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="messFee"
                                name="messFee"
                                value={addFeeData.messFee}
                                onChange={handleAddChange}
                                placeholder="Enter messFee"
                                required
                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Add Fee Structure</button>
                    </form>
                </div>

                <div class="col-md-6">
                    <h2 class="text-center">Update Fee Structure</h2>
                    <form onSubmit={handleUpdateSubmit}>
                        <div class="form-group">
                            <label htmlFor="batchId">Batch ID</label>
                            <input
                                type="number"
                                className="form-control"
                                id="batchId"
                                name="batchId"
                                value={updateFeeData.batchId}
                                onChange={handleUpdateChange}
                                placeholder="Enter Batch ID"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="tuitionFee">tuitionFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="tuitionFee"
                                name="tuitionFee"
                                value={updateFeeData.tuitionFee}
                                onChange={handleUpdateChange}
                                placeholder="Enter tuitionFee"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="hostelFee">hostelFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="hostelFee"
                                name="hostelFee"
                                value={updateFeeData.hostelFee}
                                onChange={handleUpdateChange}
                                placeholder="Enter hostelFee"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="messFee">messFee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="messFee"
                                name="messFee"
                                value={updateFeeData.messFee}
                                onChange={handleUpdateChange}
                                placeholder="Enter messFee"
                                required
                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Update Fee Structure</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FeeStructure;