// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    trailingSlash: true
};

module.exports = withNextIntl(config);
