import { TouchableOpacity } from "react-native";
import styles from "./Header.Style";
import Icon from "react-native-vector-icons/MaterialIcons";


const HeaderBtn = ({ iconUrl, dimension, handlePress, size, color }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Icon name={iconUrl} 
        resizeMode='cover'
        size={size}
        color={color}
        style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export default HeaderBtn;