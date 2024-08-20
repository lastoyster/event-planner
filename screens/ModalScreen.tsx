import { StatusBar } from "expo-status-bar";
import {
    Platform,
    StyleSheet,
    Image,
    ActivityIndicator,
    Alert,
} from 'reac-native';

import {View,Text} from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import {gql,useQuery,useMutation} from '@apollo/client';
import {useUserId} from '@nhost/react';
import { useChatContext } from "../context/ChatContext";

const getEvent = gql`
query GetEvent($id:uuid!){
    Event_by_pk(id:$id){
        id
        name
        date
        EventAttendee{
    user{
        id
        displayName
        avatarUrl
    }
 }
    }
}
`;

const joinEvent = gql` 
mutation InsertEventAttendee($eventId:uuid!, $userId:uuid!){
    
}`