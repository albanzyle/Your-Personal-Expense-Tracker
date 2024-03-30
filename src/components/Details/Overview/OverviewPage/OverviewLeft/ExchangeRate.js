import React from "react";
import styles from "../../../../../styles/Details/Overview/OverviewPage/OverviewLeft/ExchangeRate.module.css";
import CountryFlag from "react-country-flag";

const ExchangeRate = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Exchange Rates</h2>
            <div className={styles.rates}>
                <div className={styles.carrency}>
                    <CountryFlag
                        countryCode="EU"
                        svg
                        style={{
                            width: '3em',
                            height: '3em',
                        }}
                        title="EU"
                    />
                    <div className={styles.name}>
                        <h2>Eur</h2>
                        <span>1 EURO</span>
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.price}>
                            <h3>SELL</h3>
                            <span>1.233333</span>
                        </div>
                        <div className={styles.price}>
                            <h3>BUY</h3>
                            <span>1.233</span>
                        </div>
                    </div>


                </div>
                <div className={styles.carrency}>
                    <CountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '3em',
                            height: '3em',
                        }}
                        title="US"
                    />
                    <div className={styles.name}>
                        <h2>USD</h2>
                        <span>1 US Dollar</span>
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.price}>
                            <h3>SELL</h3>
                            <span>1.233</span>
                        </div>
                        <div className={styles.price}>
                            <h3>BUY</h3>
                            <span>1.233</span>
                        </div>
                    </div>
                </div>
                <div className={styles.carrency}>
                    <CountryFlag
                        countryCode="GB"
                        svg
                        style={{
                            width: '3em',
                            height: '3em',
                        }}
                        title="GB"
                    />
                    <div className={styles.name}>
                        <h2>GPD</h2>
                        <span>1 Pound</span>
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.price}>
                            <h3>SELL</h3>
                            <span>1.233</span>
                        </div>
                        <div className={styles.price}>
                            <h3>BUY</h3>
                            <span>1.233</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeRate;
