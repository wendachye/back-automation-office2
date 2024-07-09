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
import borders from "../../base/borders";
import colors from "../../base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../../functions/pxToRem";
import linearGradient from "../../functions/linearGradient";

const { borderWidth, borderColor } = borders;
const { transparent, info } = colors;

// types
type Types = any;

const checkbox: Types = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: pxToRem(5.6),
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      "&.Mui-checked": {
        color: info.main,

        "& .MuiSvgIcon-root": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      "& .MuiSvgIcon-root": {
        color: info.main,
        "&.Mui-checked": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },
  },
};

export default checkbox;
