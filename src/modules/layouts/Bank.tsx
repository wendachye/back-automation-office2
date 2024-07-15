import { Card, Grid } from "@mui/material";
import DashboardLayout from "assets/examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Bank = () => {
  const { bankCode } = useParams();
  const navigate = useNavigate();

  const bank = useMemo(() => {
    if (bankCode === "mbb") {
      return {
        title: "Maybank",
        color: "#495057",
        background: "#FFCF00",
        backgroundImage: "url(/mbb-background.jpg)",
        logo: "/mbb-logo.png",
      };
    }
    if (bankCode === "hlb") {
      return {
        title: "Hong Leong Bank",
        color: "#FFFFFF",
        background: "#002D62",
        backgroundImage: "url(/hlb-background.jpg)",
        logo: "/hlb-logo.png",
      };
    }
    if (bankCode === "cimb") {
      return {
        title: "CIMB",
        color: "#FFFFFF",
        background: "#EC1D23",
        backgroundImage: "url(/cimb-background.png)",
        logo: "/cimb-logo.png",
      };
    }
    if (bankCode === "pbb") {
      return {
        title: "Public Bank",
        color: "#FFFFFF",
        background: "#D84A38",
        backgroundImage: "url(/pbb-background.jpg)",
        logo: "/pbb-logo.svg",
      };
    }
    if (bankCode === "rhb") {
      return {
        title: "RHB",
        color: "#FFFFFF",
        background: "#0067B1",
        backgroundImage: "url(/rhb-background.jpg)",
        logo: "/rhb-logo.png",
      };
    }
    if (bankCode === "bsn") {
      return {
        title: "BSN",
        color: "#FFFFFF",
        background: "#00A1B1",
        backgroundImage: "url(/bsn-background.jpeg)",
        logo: "/bsn-logo.png",
      };
    }
    return {
      title: "Bank",
      color: "#FFFFFF",
      background: "#000000",
      backgroundImage: "url(/bank-background.jpg)",
      logo: "/bank-logo.png",
    };
  }, [bankCode]);

  return (
    <DashboardLayout backgroundImage={bank.backgroundImage}>
      <Grid container justifyContent="center">
        <Grid item display="flex" justifyContent="center" lg={12} xl={8}>
          <Card style={{ minWidth: 350, maxWidth: 500 }}>
            <MDBox display="flex" justifyContent="center" alignItems="center" gap={2} p={3}>
              {/* <img src={bank.logo} alt={bank.title} width="auto" height="32px" /> */}

              <MDTypography variant="h4" textAlign="center">
                {bank.title}
              </MDTypography>
            </MDBox>

            <MDBox component="form" pb={3} px={3}>
              <Grid container spacing={3}>
                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput
                    label="Username"
                    themeColor={bank.background}
                    InputProps={{ style: { width: 300 } }}
                  />
                </Grid>

                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput
                    label="Password"
                    type="password"
                    themeColor={bank.background}
                    InputProps={{ style: { width: 300 } }}
                  />
                </Grid>
              </Grid>
            </MDBox>

            <MDBox pt={2} pb={5} display="flex" justifyContent="center">
              <Grid container spacing={3} maxWidth={300}>
                <Grid item xs={6}>
                  <MDButton
                    fullWidth
                    variant="gradient"
                    color="dark"
                    size="medium"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </MDButton>
                </Grid>
                <Grid item xs={6}>
                  <MDButton
                    fullWidth
                    variant="gradient"
                    color="dark"
                    size="medium"
                    style={{ color: bank.color, background: bank.background }}
                  >
                    Login
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Bank;
