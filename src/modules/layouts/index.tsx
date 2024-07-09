import { Card, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import DashboardLayout from "assets/examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banks = ["Maybank", "Hong Leong Bank", "CIMB", "Public Bank", "RHB", "Bank Islam"];

const Home = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState("Bank");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedBank(event.target.value);
  };

  return (
    <DashboardLayout>
      <Grid container justifyContent="center">
        <Grid item display="flex" justifyContent="center" lg={12} xl={8} pt={3} mb={3}>
          <Card style={{ minWidth: 350, maxWidth: 500 }}>
            <MDBox p={3}>
              <MDTypography variant="h4" textAlign="center">
                Home
              </MDTypography>
            </MDBox>

            <MDBox component="form" pb={3} px={3}>
              <Grid container spacing={3}>
                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput label="Receiver" InputProps={{ style: { width: 300 } }} />
                </Grid>

                <Grid item display="flex" justifyContent="center" xs={12}>
                  <Select
                    value={selectedBank}
                    onChange={handleChange}
                    placeholder="Bank"
                    style={{ width: 300, height: 44 }}
                  >
                    <MenuItem value={"Bank"} disabled>
                      Bank
                    </MenuItem>
                    {Banks.map((bank) => (
                      <MenuItem key={bank} value={bank}>
                        {bank}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item display="flex" justifyContent="center" xs={12}>
                  <MDInput label="Amount" InputProps={{ style: { width: 300 } }} />
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
                    onClick={() => navigate("/transactions")}
                  >
                    Payment
                  </MDButton>
                </Grid>
                <Grid item xs={6}>
                  <MDButton fullWidth variant="gradient" color="dark" size="medium">
                    Launch
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

export default Home;
