import { StyleSheet } from "react-native";
import { Themes } from "../../../constants/Theme";


const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: Themes.COLORS.rose,
    borderRadius: Themes.SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: Themes.SIZES.small / 1.25,
  }),
});

export default styles;