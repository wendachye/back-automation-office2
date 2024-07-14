import { Card, Grid } from "@mui/material";
import DashboardLayout from "assets/examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const Bank = () => {
  const { bankCode } = useParams();

  const title = useMemo(() => {
    if (bankCode === "mbb") return "Maybank";
    if (bankCode === "hlb") return "Hong Leong Bank";
    if (bankCode === "cimb") return "CIMB";
    if (bankCode === "pbb") return "Public Bank";
    if (bankCode === "rhb") return "RHB";
    if (bankCode === "bsn") return "BSN";
    return "Bank";
  }, [bankCode]);

  const theme = useMemo(() => {
    if (bankCode === "mbb") {
      return {
        color: "#495057",
        background: "#FFCF00",
      };
    }
    if (bankCode === "hlb") {
      return {
        color: "#FFFFFF",
        background: "#002D62",
      };
    }
    if (bankCode === "cimb") {
      return {
        color: "#FFFFFF",
        background: "#EC1D23",
      };
    }
    if (bankCode === "pbb") {
      return {
        color: "#FFFFFF",
        background: "#D84A38",
      };
    }
    if (bankCode === "rhb") {
      return {
        color: "#FFFFFF",
        background: "#0067B1",
      };
    }
    if (bankCode === "bsn") {
      return {
        color: "#FFFFFF",
        background: "#00A1B1",
      };
    }
    return {
      color: "#FFFFFF",
      background: "#000000",
    };
  }, [bankCode]);

  return (
    <DashboardLayout>
      <Grid container justifyContent="center">
        <Grid item display="flex" justifyContent="center" lg={12} xl={8}>
          <Card style={{ minWidth: 350, maxWidth: 500 }}>
            <MDBox p={3}>
              <MDTypography variant="h4" textAlign="center">
                {title}
              </MDTypography>
            </MDBox>

            <MDBox component="form" pb={3} px={3}>
              <Grid container spacing={3}>
                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput
                    label="Username"
                    themeColor={theme.background}
                    InputProps={{ style: { width: 300 } }}
                  />
                </Grid>

                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput
                    label="Password"
                    type="password"
                    themeColor={theme.background}
                    InputProps={{ style: { width: 300 } }}
                  />
                </Grid>
              </Grid>
            </MDBox>

            <MDBox pt={2} pb={5} display="flex" justifyContent="center">
              <Grid item xs={6}>
                <MDButton
                  fullWidth
                  variant="gradient"
                  color="dark"
                  size="medium"
                  style={{ color: theme.color, background: theme.background }}
                >
                  Login
                </MDButton>
              </Grid>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Bank;
