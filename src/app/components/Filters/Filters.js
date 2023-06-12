"use client";

import { useState } from 'react';
import { Season, Meal, DietaryPreferences } from '../../constants/sample.constants';


const FilterComponent = ({ onClickFilter }) => {
    const [seasonFilters, setSeasonFilters] = useState([]);
    const [dietFilters, setDietFilters] = useState([]);
    const [mealFilters, setMealFilters] = useState([]);

    const handleFilterChange = (event, filterType) => {
        const { value, checked } = event.target;
        onClickFilter(value, checked);
        let updatedFilters = [];

        switch (filterType) {
            case 'season':
                updatedFilters = [...seasonFilters];
                break;
            case 'diet':
                updatedFilters = [...dietFilters];
                break;
            case 'meal':
                updatedFilters = [...mealFilters];
                break;
            default:
                break;
        }

        if (updatedFilters.includes(value)) {
            updatedFilters = updatedFilters.filter((filter) => filter !== value);
        } else {
            updatedFilters.push(value);
        }

        switch (filterType) {
            case 'season':
                setSeasonFilters(updatedFilters);
                break;
            case 'diet':
                setDietFilters(updatedFilters);
                break;
            case 'meal':
                setMealFilters(updatedFilters);
                break;
            default:
                break;
        }
    };

    const renderCheckboxOptions = (options, filterType) => {
        return options.map((option) => (
            <li key={option}>
                <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={getFilterState(filterType).includes(option)}
                    onChange={(event) => handleFilterChange(event, filterType)}
                />
                <label htmlFor={option} style={{ color: "black", fontSize: 14, paddingLeft: 8 }}>
                    {option}
                </label>
            </li>
        ));
    };

    const getFilterState = (filterType) => {
        switch (filterType) {
            case 'season':
                return seasonFilters;
            case 'diet':
                return dietFilters;
            case 'meal':
                return mealFilters;
            default:
                return [];
        }
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
                <ul>{renderCheckboxOptions(Object.values(DietaryPreferences), 'diet')}</ul>
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

