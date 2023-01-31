import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Paragraph() {
  return (
    <View style={{backgroundColor: '#660066'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.about}>About IndiaNikah</Text>
                  <Text style={styles.line}>___________</Text>
                  <View>
                    <Text style={styles.Ptext}>
                      India Nikah is India's 100% free{'\n'}
                      matrimony/shaadi/rishta/rishtey website for Indian{'\n'}
                      Muslims covering all Indian states (Maharashtra,{'\n'}
                      Karnataka etc) (All Maslak, biradari, education{'\n'}
                      backgrounds (doctor engineer etc ) and madarasa{'\n'}pass
                      outs (Alim/hafiz/mufti)). This site also offers
                      {'\n'}second marraige proposals. Also for Indians staying
                      {'\n'}abroad (NRIs). We also try to help regarding jobs,
                      {'\n'}rental accommodation and regarding Share Market
                      {'\n'}investment awareness. This is an effort to make
                      {'\n'}your efforts easy. This site also offers guidelines
                      {'\n'}(Go to guidelines section) on pre and post marriage
                      {'\n'}related topics in the form of YouTube videos of
                      {'\n'}experts from all maktab fikr(Sects). Uploading{'\n'}
                      profile pics are not mandatory. You can directly{'\n'}
                      Open WhatsApp of the profile you are interested in{'\n'}
                      and start communication. Please login and stay{'\n'}
                      active on our site to keep your profile on top in{'\n'}
                      search results.{'\n'}
                      Note - Paid marriage bureaus are not allowed to use{'\n'}
                      profiles from the site. We do not do profile{'\n'}
                      background verification.
                    </Text>
                  </View>
                </View>
                <View style={{alignItems:'center',}}>
                <Text style={styles.text}>
                    How it works | Mobile App | Features | Marreiage {'\n'}guidelines | 
                    Website in Hindi Urdu | Jobs (Watch in {'\n'}full screen)
                </Text>
                </View>
              </View>
  )
}

const styles = StyleSheet.create({
    about: {
        color: '#a6ffa6',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 22,
      },
      line: {
        color: 'lightgray',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 25,
      },
      Ptext: {
        color: '#d9ccbf',
        textAlign: 'center',
        fontSize: 16,
      },
      text:{
        textAlign:'center',
        marginTop:25,
        fontSize:15,
        fontWeight:'bold',
        color:'#ccccf5',
    },
})