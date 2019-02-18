import dotenv from "dotenv";
/* global process */
/**
 * @description app configs
 */

// to get the values from .env
if (typeof(process.env.NODE_ENV) === "undefined" || process.env.NODE_ENV !== "production") {
    dotenv.config();
}

export const config = {
    env: process.env.NODE_ENV || "development",
    loglevel: "info",
    port: process.env.PORT || 3001

};
