import React, { useState } from "react";

const TagSearch = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [searchToggle, setSearchToggle] = useState(true);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <>
      <div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {isTrue ? (
                  <>
                    <h5 style={{ fontWeight: 400 }}>TAGS SEARCH</h5>
                  </>
                ) : (
                  <>
                    <h5 style={{ fontWeight: 400 }}>ADVANCED SEARCH</h5>
                  </>
                )}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                {isTrue ? (
                  <>
                    <div className="container-fluid">
                      <form>
                        <div className="row">
                          <div className="col-md-3 my-1">
                            <label>Streams</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Class</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Subject</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Topic</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Subtopic</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Question Type</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Level</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Source Material</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Language</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Centers</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>V-Tag</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="V-TAG Or %V-TAG%"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Solutions</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Hashtags</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Sessions</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>

                          <div className="row g-3">
                            <div className="col-md-8 my-1">
                              <label>Custom Tag</label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>

                            <div className="col-md-4 my-1">
                              <label>&nbsp;</label>
                              <div className="d-flex">
                                <button
                                  type="button"
                                  className="btn btn-success me-2"
                                  style={{
                                    backgroundColor: "#139c9b",
                                    color: "white",
                                  }}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="container-fluid p-3 mt-4"
                      style={{
                        borderTop: "1px solid #d3d3d3",
                        textAlign: "right",
                        alignItems: "center",
                      }}
                    >
                      <label
                        class="form-label mr-2"
                        style={{ color: "#139c9b", marginRight: "20px" }}
                        onClick={handleClick}
                      >
                        Advance Search
                      </label>
                      <button
                        type="button"
                        className="btn btn-success"
                        style={{ backgroundColor: "#139c9b", color: "white" }}
                      >
                        Apply Filter
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container-fluid col-md-12">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onChange={handleSearchToggle}
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Search Toggle
                        </label>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-md-3 my-1">
                            {searchToggle ? (
                              <label>Unique Identifier / Question ID</label>
                            ) : (
                              <labeL>Source Code</labeL>
                            )}

                            <input
                              type="text"
                              class="form-control"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Tag Status</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Tagged</option>
                              <option value="2">Untagged</option>
                              <option value="3">Partially Tagged</option>
                            </select>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Date</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="select date"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>

                          <div className="col-md-2 my-1">
                            <label>Date</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="select date"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>

                          <div className="col-md-3 my-1">
                            <label>Operator</label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>

                          <p
                            style={{
                              color: "red",
                              marginTop: "5px",
                              fontSize: "12px",
                            }}
                          >
                            *You can use % at the start/end of Unique Identifier
                            to search as part match, also search by ? mark (one
                            ? mark represent a tag. i.e. ? for Stream, ? for
                            Class etc..)
                          </p>
                        </div>
                      </form>
                    </div>

                    <div
                      className="container-fluid p-3 mt-4"
                      style={{
                        borderTop: "1px solid #d3d3d3",
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-success  mx-2"
                        style={{ backgroundColor: "#139c9b", color: "white" }}
                      >
                        Apply Filter
                      </button>
                      <label
                        class="form-label mr-2"
                        style={{ color: "#139c9b", marginRight: "20px" }}
                        onClick={handleClick}
                      >
                        Tag Search
                      </label>

                      <span
                        style={{ display: "block" }}
                        className="col-md-2 mx-2"
                      >
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Type</option>
                          <option value="1">Integer</option>
                          <option value="2">Matrix</option>
                        </select>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div className="col">
                  <h5 style={{ fontWeight: 400 }}>Questions</h5>
                  <p>Apply Filters to View Questions</p>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                
                  <div >
                    <h5 style={{ fontWeight: 400 }}>QUESTIONS</h5>
                    <p>
                      Showing{" "}
                      <span
                        style={{ color: "#c7254e", backgroundColor: "#f9f2f4" }}
                      >
                        0
                      </span>{" "}
                      of Total{" "}
                      <span
                        style={{ color: "#c7254e", backgroundColor: "#f9f2f4" }}
                      >
                        0
                      </span>{" "}
                      Questions
                    </p>
                  </div>
                
                
                
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div style={{display:"flex",flexDirection:"row"}}>
                <h6 style={{fontWeight:"400"}}>Question Cart</h6>
                <div class="form-check form-switch mx-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          
                        </label>
                 </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TagSearch;
