import { Image, StyleSheet, Platform, View, Text, Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const screen = Dimensions.get("screen").height;
export default function HomeScreen() {

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="green" />
        <Text style={styles.headertext}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="green" />
      </View>

      {/* Image */}

      <View style={styles.imagebackground}>
        <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s" }} />
      </View>

      {/* Banner */}

      <View style={styles.banner}>
        <View><MaterialIcons name="attach-money" size={24} color="green" /></View>
        <View><MaterialIcons name="message" size={24} color="green" /></View>
      </View>

      {/* Cards */}

      <View style={styles.cards}>

        <View style={styles.row}>
         <Card text={'Carpool'} bgColor='#B7E7E3' icon={'directions-car-filled'} col='#047AAB'/>
         <Card text={'Ride'} bgColor='#C7F2A0' icon={'bike-scooter'} col='#1C8B04'/>
        </View>

        <View style={styles.row}>
        <Card text={'Delivery'} bgColor='#EBD2A4' icon={'delivery-dining'} col='#D28905'/>
        <Card text={'Mobile'} bgColor='#E7A9F0' icon={'mobile-friendly'} col='#8104D3'/>
        </View>

        <View style={styles.row}>
        <Card text={'Shop'} bgColor='#7AC3D7' icon={'shop'} col='#1D05C8'/>
        <Card text={'Rentals'} bgColor='#EFEA8B' icon={'timelapse'} col='#CBB607'/>
        </View>

      </View>

    </View>
  );
}

const Card = ({ bgColor , icon , col , text}: { bgColor: string , icon:any , col:string , text:string})=> {
  return (
    <View style={[styles.rowcard, { backgroundColor: bgColor }]}>
      <Text style={{textAlign:'right' ,}} >{text}</Text>
      <MaterialIcons name={icon} size={50} color={col} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff"
    },
    header: {
      marginTop: 18,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      height: 40,
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      letterSpacing: 3,
    },
    headertext: {
      fontSize: 20,
      fontWeight: "bold",
      color: "green",
    },
    imagebackground: {
      height: screen / 3,
      backgroundColor: "#D9DBDA",
      paddingHorizontal: 20,
      paddingTop: 16
    },
    image: {
      height: "89%",
      borderRadius: 10
    },
    banner: {
      height: 40,
      marginHorizontal: 20,
      backgroundColor: "#fff",
      borderRadius: 8,
      flexDirection: "row",
      marginTop: -14,
      justifyContent: "space-around",
      alignItems: "center",
      borderBottomWidth: 0.7,
      borderBottomColor: "#ccc",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },

    cards: {
      flex: 1,
      margin: 16,
      gap: 6,
    },
    row: {
      flex: 1,
      flexDirection: "row",
      gap: 6,
    },
    rowcard: {
      flex: 1,
      borderRadius: 10,
      padding:10
    }
  });
