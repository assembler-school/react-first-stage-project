import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegularButton from "../../Atoms/RegularButton/RegularButton";
import TextField from "@mui/material/TextField";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import sellCurrency from "../../../utils/sellCurrency";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { typingSale, cryptoAmount, newUSD } =
    React.useContext(CryptoWebContext);
  const { crypto } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleInvestment(e) {
    let newUSD = e.target.value * crypto.quote.USD.price;
    typingSale(e.target.value, newUSD);
  }

  function handleSale() {
    const buyInfo = {
      crypto: crypto,
      cryptoAmount: cryptoAmount,
      newUSD: newUSD,
    };
    sellCurrency(buyInfo);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Sell</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {crypto && `${crypto.name} - ${crypto.symbol}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {crypto && `Your current amount: ${crypto.amount}`}
            <div style={{ marginTop: "1rem" }}>
              <TextField
                onChange={handleInvestment}
                id="outlined-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <p>{crypto && `${crypto.name} $$$: ${newUSD}`}</p>
            <RegularButton onClick={handleSale}>Sell</RegularButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
