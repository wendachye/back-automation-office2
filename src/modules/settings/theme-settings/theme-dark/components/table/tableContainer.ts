/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import colors from "modules/settings/theme-settings/theme/theme-dark/base/colors";
import boxShadows from "modules/settings/theme-settings/theme/theme-dark/base/boxShadows";
import borders from "modules/settings/theme-settings/theme/theme-dark/base/borders";

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

// types
type Types = any;

const tableContainer: Types = {
  styleOverrides: {
    root: {
      backgroundColor: background.card,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
