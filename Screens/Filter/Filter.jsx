import {Text} from "react-native";

export const Filter = ({route})=>{
    const params = route.params;
    return(
        <Text>{params.id.toString()}</Text>
    )
}
