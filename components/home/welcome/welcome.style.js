import { StyleSheet } from "react-native";
import { Themes } from "../../../constants/Theme";


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: Themes.FONT.regular,
    fontSize: Themes.SIZES.large,
    color: Themes.COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: Themes.FONT.bold,
    fontSize: Themes.SIZES.xLarge,
    color: Themes.COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Themes.SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: Themes.COLORS.white,
    marginRight: Themes.SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Themes.SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: Themes.FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: Themes.SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: Themes.COLORS.tertiary,
    borderRadius: Themes.SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: Themes.COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: Themes.SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: Themes.SIZES.small / 2,
    paddingHorizontal: Themes.SIZES.small,
    borderRadius: Themes.SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? Themes.COLORS.secondary : Themes.COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: Themes.FONT.medium,
    color: activeJobType === item ? Themes.COLORS.secondary : Themes.COLORS.gray2,
  }),
});

export default styles;