import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wthite', 
    width: '100%',
  },
  button: {
    borderRadius: 8,
    width: 80,
    height:80,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10
},
  textButton: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  },
  TextGlobal: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    alignContent: 'center',
  },
  TextTemperature: {
    fontSize: 90,
    fontWeight: 'bold',
    marginBottom: 20,
    alignContent: 'center',
  },
  buttonColor: {
    padding: 12,
    borderRadius: 8,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  Textcolor: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    alignContent: 'center',
  },
});

export default globalStyles;
