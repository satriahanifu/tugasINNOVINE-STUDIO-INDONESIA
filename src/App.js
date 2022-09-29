import React, { useState, useEffect } from "react";
import axios from "axios";
import bootstrap from "bootstrap";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) !== -1;
    });

    console.log("result hasil y" + result);
    setFilteredData(result);
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("error getting data" + error);
      });
  }, []);

  const style = {
    width: "10rem",
    marginTop: "1rem",
    marginLeft: "1rem",
  };

  return (
    <div className="container">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary d-flex flex-column">
          <div class="container-fluid ">
            <input placeholder="search furniture" input type="text" onChange={(e) => handleSearch(e)} />
          </div>
          <div className="d-flex justify-content-around">
            <div class="dropdown" style={{ marginRight: "10rem" }}>
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                furniture style
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    contemporary
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    modern
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    scandinavian
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    classic
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    midcentury
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                delivary time
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    7
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    28
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    12
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="d-flex flex-wrap">
        {filteredData.map((value, index) => {
          return (
            <div className="card " style={style} key={value.key}>
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <h3>{value.url}</h3>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
