"use client";

import { useState } from 'react';
import { Season, Meal, DietaryPreferences } from '../../constants/sample.constants';


const selectedFilters = {
    season: [],
    dietaryPreferences: [],
    meal:[]
  };



const FilterComponent = ({ onClickFilter }) => {

    const handleFilterChange = (event, filterType,option) => {
        const {checked } = event.target;

        if (checked) {
            selectedFilters[filterType].push(option);
          } else {
            selectedFilters[filterType] = selectedFilters[filterType].filter(
              (item) => item !== option
            );
          }
        

        onClickFilter(selectedFilters);
       
    };

    const renderCheckboxOptions = (options, filterType) => {
        return options.map((option) => (
            <li key={option}>
                <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={selectedFilters[filterType].includes(option)}
                    onChange={(event) => handleFilterChange(event, filterType,option)}
                />
                <label htmlFor={option} style={{ color: "black", fontSize: 14, paddingLeft: 8 }}>
                    {option}
                </label>
            </li>
        ));
    };

 

    return (
        <div style={{ padding: 8 }}>
            <div>
                <h5 style={{ marginTop: 8, marginBottom: 4, color: 'black' }}>
                    <b>Season:</b>
                </h5>
                <ul>{renderCheckboxOptions(Object.values(Season), 'season')}</ul>
            </div>

            <div>
                <h5 style={{ marginTop: 16, marginBottom: 4, color: 'black' }}>
                    <b>Dietary Preferences:</b>
                </h5>
                <ul>{renderCheckboxOptions(Object.values(DietaryPreferences), 'dietaryPreferences')}</ul>
            </div>

            <div>
                <h5 style={{ marginTop: 16, marginBottom: 4, color: 'black' }}>
                    <b>Meal:</b>
                </h5>
                <ul>{renderCheckboxOptions(Object.values(Meal), 'meal')}</ul>
            </div>
        </div>
    );
};

export default FilterComponent;

