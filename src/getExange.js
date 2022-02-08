import axios from "axios";

export const getExange = async () => {
  try {
    const res = await axios.get(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5"
    );
    return res.data.filter((item) => item.ccy !== "BTC");
  } catch (err) {
    console.info(err);
  }
};
