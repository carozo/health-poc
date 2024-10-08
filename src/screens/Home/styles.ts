import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Palette';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Palette.surface_10,
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: '50%',
    marginTop: 10,
    marginBottom: 10,
    transform: [{rotateZ: '-90deg'}],
  },
  text: {
    paddingVertical: 20,
    color: Palette.surface_90,
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 1.5,
    borderColor: Palette.primary_30,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    marginTop: 20,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Palette.sucess_50,
  },
  title: {
    fontSize: 44,
    color: Palette.primary_50,
    marginVertical: 20,
    letterSpacing: 1.5,
    marginTop: 70,
  },

  row: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  input: {
    borderColor: Palette.primary_50,
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 5,
    width: 270,
  },
  glucoseImage: {
    width: 40,
    height: 40,
  },
});
