import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './importImages';
import styles from './Brand.module.css';

const brands = [google, slack, atlassian, dropbox, shopify];

const Brand = () => {
  return (
    <ul className={`${styles.brand} section__padding`}>
      {brands.map((brand) => (
        <li key={brand}>
          <img src={brand} alt={brand} />
        </li>
      ))}
    </ul>
  );
};

export default Brand;
