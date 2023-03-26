import { StyleSheet } from "react-native";
import { Themes } from "../constants/Theme";


const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle: {
        fontFamily: Themes.FONT.bold,
        fontSize: Themes.SIZES.xLarge,
        color: Themes.COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: Themes.FONT.medium,
        fontSize: Themes.SIZES.small,
        color: Themes.COLORS.primary,
    },
    loaderContainer: {
        marginTop: Themes.SIZES.medium
    },
    footerContainer: {
        marginTop: Themes.SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: Themes.COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.COLORS.white
    },
    paginationText: {
        fontFamily: Themes.FONT.bold,
        fontSize: Themes.SIZES.medium,
        color: Themes.COLORS.primary
    }
});

export default styles;