import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setCountryData } from "./redux/country/countrySlice";
import { API_URL, POPULATION_DROPDOWN_OPTIONS } from "./constants";
import { Button, Dropdown, Table } from "./components";

function App() {
  const countryData = useAppSelector(
    (state: RootState) => state.country.countryData
  );
  const dispatch = useAppDispatch();

  const [countryName, setCountryName] = useState("");
  const [population, setPopulation] = useState<IDropdownOption | null>(null);
  const [filteredData, setFilteredData] = useState<ICountry[]>([]);

  // Function to call api, can use RTK Query since we are using redux
  const getAllData = useCallback(() => {
    axios
      .get(API_URL)
      .then((res) => {
        dispatch(setCountryData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  // clear filters
  const clearFilters = useCallback(() => {
    setCountryName("");
    setPopulation(null);
  }, []);

  // Effect to apply filters on change
  useEffect(() => {
    let newData = countryData;

    if (countryName) {
      const countryRe = new RegExp(countryName, "ig");
      newData = newData.filter((data) => data.name.match(countryRe));
    }

    if (population) {
      newData = newData.filter((data) => data.population < population?.value);
    }

    setFilteredData(newData);
  }, [countryName, population, countryData]);

  return (
    <div className="app-container">
      <header className="app-header">Countries Info</header>
      <div className="filter-header">
        <div className="filter-left">
          <input
            className="filter-input"
            placeholder="Country Name"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <Dropdown
            options={POPULATION_DROPDOWN_OPTIONS}
            placeholder="Population"
            selectedOption={population}
            onSelect={setPopulation}
          />
          <Button type="secondary" title="Clear" onClick={clearFilters} />
        </div>

        <Button title="Show All Countries" onClick={getAllData} />
      </div>
      <Table data={filteredData} />
    </div>
  );
}

export default App;
