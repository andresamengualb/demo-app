import { Provider } from "react-redux";
import { store } from "../store/Store";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/style.scss";
import "../data/";

export const metadata = {
  title: "Xtreme Next Js Admin Template By WrapPixel",
  description: "Xtreme Next Js Admin Template By WrapPixel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <FullLayout>{children}</FullLayout>
        </Provider>
      </body>
    </html>
  );
}
