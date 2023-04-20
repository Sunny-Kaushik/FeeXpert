function FeeStructure() {
    return (
        <div class="container mt-5">
            <h1 class="text-center">Fee Structure Management</h1>
            <div class="row mt-5">
                <div class="col-md-6">
                    <h2 class="text-center">Add Fee Structure</h2>
                    <form>
                        <div class="form-group">
                            <label for="feeType">Fee Type</label>
                            <input type="text" class="form-control" id="feeType" placeholder="Enter fee type" />
                        </div>
                        <div class="form-group">
                            <label for="feeAmount">Fee Amount</label>
                            <input type="number" class="form-control" id="feeAmount" placeholder="Enter fee amount" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Add Fee Structure</button>
                    </form>
                </div>
                <div class="col-md-6">
                    <h2 class="text-center">Update Fee Structure</h2>
                    <form>
                        <div class="form-group">
                            <label for="feeTypeUpdate">Fee Type to Update</label>
                            <input type="text" class="form-control" id="feeTypeUpdate" placeholder="Enter fee type to update" />
                        </div>
                        <div class="form-group">
                            <label for="feeAmountUpdate">New Fee Amount</label>
                            <input type="number" class="form-control" id="feeAmountUpdate" placeholder="Enter new fee amount" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Update Fee Structure</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FeeStructure;