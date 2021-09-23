import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component{

playSound= async (soundChunk)=>{
var soundLink= 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
Audio.Sound.createAsync({uri:soundLink},{shouldPlay:true})
}

render(){
  return( <TouchableOpacity style={styles.chunkButton} onPress={()=>{
    this.playSound(this.props.soundChunk);
  }}>
              <Text style={styles.output}>{this.props.wordChunk}</Text>;
            </TouchableOpacity>
            );
  
}
}
const styles = StyleSheet.create({
   output: {

    alignSelf: 'center',
    fontSize: 38,
    textAlign:'center'
  },
  chunkButton:{
    marginTop:20,
    borderWidth:2,
    width:80,
    height:50,
    alignSelf:'center',
    justifyContent:'center'

  },
})
export default PhonicSoundButton;