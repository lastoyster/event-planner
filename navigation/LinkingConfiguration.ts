import {LinkOptions} from "@react-navigation/native";
import * as Linking from "expo-linking";

import {RootStackParamList} from "../types";

const linking: LinkingOptions<RootStackParamList>={
   prefixes:{Linking.createURL('/')],
   config:{
    screens:{
        TabOne:{
            screens:{
                TabOneScreen:'one', 
            },
        },
        TabTwo:{
            screens:{
            TabScreen:'two',
            },
        },
    },
   },
   Modal:'modal',
   NotFound:'*',
},
},

export default Linking;